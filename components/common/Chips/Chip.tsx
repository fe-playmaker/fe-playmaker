'use client'

import clsx from 'clsx'
import type { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react'
import { cloneElement, useState } from 'react'

interface ChipsProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  icon?: ReactElement
  selectChipHandler: (chip: string, isSelected: boolean) => void
}

export const Chip = ({
  icon,
  title,
  selectChipHandler,
  ...props
}: ChipsProps) => {
  const [checked, setChecked] = useState(false)

  const changeChipHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    selectChipHandler(title, e.target.checked)
  }

  return (
    <button type="button">
      <input
        className="peer hidden"
        type="checkbox"
        checked={checked}
        onChange={changeChipHandler}
        id={title}
        {...props}
      />
      <label
        htmlFor={title}
        className={clsx(
          'flex cursor-pointer items-center justify-center gap-3 whitespace-nowrap',
          'rounded-full py-3 px-7 text-label-md font-medium text-darkAlpha-40',
          'shadow-default outline-2 outline-transparent transition-colors hover:bg-darkAlpha-5',
          'peer-checked:pr-7 peer-checked:pl-5 peer-checked:text-dark peer-checked:outline peer-checked:outline-dark',
          'peer-invalid:shadow-validate peer-invalid:outline-primaryShade-50',
        )}
      >
        {checked &&
          !!icon &&
          cloneElement(icon, {
            className: 'w-6 h-6 group-disabled:fill-darkAlpha-20 fill-dark',
          })}

        {title}
      </label>
    </button>
  )
}
