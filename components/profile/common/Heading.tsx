import clsx from 'clsx'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const Heading = ({ children, className }: Props) => (
  <h4
    className={clsx(
      'pb-5 font-poppins text-heading-xs font-bold text-dark',
      className,
    )}
  >
    {children}
  </h4>
)
