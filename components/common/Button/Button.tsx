import { cva, VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

const button = cva(
  [
    'font-bold',
    'border',
    'rounded-full',
    'text-white',
    'border-transparent',
    'p-2 px-4',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-primary'],
        secondary: ['bg-secondary'],
      },
      size: {
        small: ['text-label-md'],
        big: ['text-label-xl'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'small',
    },
  },
)

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {
  readonly children: ReactNode
}

export const Button = ({ children, intent, ...props }: Props) => (
  <button className={button({ intent })} {...props} type="button">
    {children}
  </button>
)
