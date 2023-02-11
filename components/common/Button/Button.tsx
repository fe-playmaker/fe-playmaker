import { cva, VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, ReactElement } from 'react'
import { cloneElement } from 'react'

const buttonCva = cva(
  [
    'rounded-full group',
    'transition-all',
    'flex items-center gap-2',
    'tracking-wider font-bold',
  ],
  {
    variants: {
      buttonType: {
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
      buttonSize: {
        extraLarge: 'text-label-xl px-9 py-5',
        large: 'text-label-lg px-8 py-4',
        medium: 'text-label-md px-6 py-3',
        small: 'text-label-sm px-4 py-3',
      },
    },
  },
)

const iconCva = cva('group-disabled:fill-darkAlpha-20', {
  variants: {
    iconType: {
      primary: 'fill-white',
      secondary: 'fill-dark',
    },
    iconSize: {
      large: 'w-7 h-7',
      small: 'w-5 h-5',
    },
  },
})

type ButtonProps = VariantProps<typeof buttonCva>
type IconProps = VariantProps<typeof iconCva>

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps,
    IconProps {
  text?: string
  icon?: ReactElement
}

export const Button = ({
  text,
  icon,
  buttonType,
  buttonSize,
  iconType,
  iconSize,
  ...props
}: Props) => (
  <button
    className={buttonCva({ buttonSize, buttonType })}
    type="button"
    {...props}
  >
    {!!icon &&
      cloneElement(icon, {
        className: iconCva({ iconSize, iconType }),
      })}
    {text}
  </button>
)
