import { cva, VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, ReactElement } from 'react'
import { cloneElement } from 'react'

const buttonCva = cva(
  [
    'rounded-full group',
    'transition-all',
    'flex items-center',
    'tracking-wider font-bold',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-dark text-white hover:bg-primary',
          'disabled:bg-light disabled:text-darkAlpha-20 disabled:hover:bg-light disabled:cursor-default',
        ],
        secondary: [
          'bg-none outline outline-1 outline-darkAlpha-30',
          'hover:outline-2 hover:outline-darkShade-50',
          'disabled:text-darkAlpha-20 disabled:hover:outline-1 disabled:outline-darkAlpha-5 disabled:cursor-default',
        ],
      },
      size: {
        large: 'text-label-xl px-9 py-5 gap-3',
        medium: 'text-label-lg px-8 py-4 gap-3',
        small: 'text-label-md px-6 py-3 gap-2',
        extraSmall: 'text-label-md px-4 py-3 gap-2',
      },
    },
  },
)

const iconCva = cva('group-disabled:fill-darkAlpha-20', {
  variants: {
    intent: {
      primary: 'fill-white',
      secondary: 'fill-dark',
    },
    size: {
      large: 'w-7 h-7',
      medium: 'w-5 h-5',
      small: 'w-5 h-5',
      extraSmall: 'w-4 h-4',
    },
  },
})

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  text?: string
  icon?: ReactElement
}

export const Button = ({ text, icon, intent, size, ...props }: Props) => (
  <button className={buttonCva({ size, intent })} type="button" {...props}>
    {!!icon &&
      cloneElement(icon, {
        className: iconCva({ size, intent }),
      })}
    {text}
  </button>
)
