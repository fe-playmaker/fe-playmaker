import { cva, VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

const buttonCva = cva(
  ['border', 'rounded-full', 'border-transparent', 'transition-all'],
  {
    variants: {
      intent: {
        primary:
          'bg-dark text-white font-bold hover:bg-primary disabled:bg-light disabled:text-darkShade-10 disabled:hover:bg-light disabled:cursor-default',
        secondary:
          'bg-none border border-dark font-medium hover:border-2 disabled:text-darkShade-10 disabled:hover:border disabled:border-darkAlpha-5 disabled:cursor-default',
        text: 'border-none text-darkAlpha-50 font-medium px-0 py-0 hover:text-tertiary',
      },
      size: {
        large: 'text-label-xl px-9 py-5',
        medium: 'text-label-lg px-8 py-4',
        small: 'text-label-md px-6 py-3',
        extraSmall: 'text-label-sm px-4 py-3',
      },
    },
  },
)

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  text?: string
  icon?: ReactNode
}

export const Button = ({ text, intent, size, ...props }: Props) => (
  <button className={buttonCva({ intent, size })} type="button" {...props}>
    {text}
  </button>
)
