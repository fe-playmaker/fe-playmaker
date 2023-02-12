'use client'

import { Listbox, Transition } from '@headlessui/react'
import { cva, VariantProps } from 'class-variance-authority'
import { Fragment } from 'react'

import ChevronDownIcon from '@/icons/ChevronDown.svg'
import ChevronUpIcon from '@/icons/ChevronUp.svg'

import { ISelectItem } from './types'

const menuButtonCva = cva(
  'font-poppins font-medium ui-open:text-tertiary ui-open:fill-tertiary fill-darkAlpha-20 text-darkAlpha-40 flex gap-3 items-center transition-colors hover:fill-darkAlpha-40',
  {
    variants: {
      type: {
        default: '',
        filter: 'bg-white shadow-default rounded-[20px] hover:bg-light',
      },
      size: {
        medium: 'text-label-md',
        small: 'text-label-sm',
      },
    },
    compoundVariants: [
      {
        type: 'filter',
        size: 'medium',
        className: 'px-7 py-3',
      },
      {
        type: 'filter',
        size: 'small',
        className: 'px-5 py-3',
      },
    ],
    defaultVariants: {
      type: 'default',
    },
  },
)

interface IProps extends VariantProps<typeof menuButtonCva> {
  items: ISelectItem[]
  name: string
  defaultValue?: string
  inputName?: string
  currentValue?: string
  setCurrentValue?: (item: string) => void
}

function Select({
  name,
  size,
  items,
  type,
  inputName,
  defaultValue,
  currentValue,
  setCurrentValue,
}: IProps) {
  return (
    <Listbox
      as="div"
      className="relative"
      name={inputName}
      defaultValue={defaultValue}
      value={currentValue}
      onChange={setCurrentValue}
    >
      <Listbox.Button className={menuButtonCva({ size, type })}>
        {currentValue ? (
          <>
            <span>
              {items.find(item => item.value === currentValue)?.name || name}
            </span>
            <ChevronDownIcon className="h-5 w-5 fill-[inherit] ui-open:hidden" />
            <ChevronUpIcon className="h-5 w-5 fill-[inherit] ui-not-open:hidden" />
          </>
        ) : (
          ({ value }) => (
            <>
              <span>
                {items.find(item => item.value === value)?.name || name}
              </span>
              <ChevronDownIcon className="h-5 w-5 fill-[inherit] ui-open:hidden" />
              <ChevronUpIcon className="h-5 w-5 fill-[inherit] ui-not-open:hidden" />
            </>
          )
        )}
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="absolute mt-4 min-w-[12.5rem] bg-white py-4 shadow-default">
          {items.map(item => (
            <Listbox.Option
              key={item.name}
              value={item.value}
              disabled={item?.disabled}
              className="min-h-[2.313rem] w-full pl-5 text-left font-inter text-body-md font-medium text-darkAlpha-40 transition-colors hover:bg-darkShade-5 hover:font-bold hover:text-dark"
              as="button"
            >
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

interface InputSelectProps
  extends VariantProps<typeof menuButtonCva>,
    Pick<IProps, 'name' | 'items' | 'defaultValue'> {
  inputName: string
}

export const InputSelect = (props: InputSelectProps) => <Select {...props} />

//

interface ControlledSelectProps
  extends VariantProps<typeof menuButtonCva>,
    Pick<IProps, 'name' | 'items'> {
  currentValue: string | undefined
  setCurrentValue?: (item: string) => void
}

export const StateSelect = (props: ControlledSelectProps) => (
  <Select {...props} />
)
