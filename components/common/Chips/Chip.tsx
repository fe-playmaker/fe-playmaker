'use client'

import { cva, VariantProps } from 'class-variance-authority'
import type { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react'
import { cloneElement, useState } from 'react'

const iconCva = cva('group-disabled:fill-darkAlpha-20 fill-dark', {
  variants: {
    iconSize: {
      large: 'w-7 h-7',
      small: 'w-5 h-5',
    },
  },
})

interface ChipsProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof iconCva> {
  title: string
  icon?: ReactElement
  selectChipHandler: (chip: string, isSelected: boolean) => void
}

export const Chip = ({
  iconSize,
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
    <div>
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
        className="flex cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-full px-7 py-3 text-label-sm text-darkAlpha-40 shadow-default outline-2 outline-transparent transition-colors hover:bg-darkAlpha-5 peer-checked:text-dark peer-checked:outline peer-checked:outline-dark peer-invalid:shadow-validate peer-invalid:outline-primaryShade-50"
      >
        {checked &&
          !!icon &&
          cloneElement(icon, {
            className: iconCva({ iconSize }),
          })}

        {title}
      </label>
    </div>
  )
}
