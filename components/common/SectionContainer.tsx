import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const SectionContainer = ({ children, className }: Props) => (
  <section className={clsx('bg-white px-6 py-8', className)}>
    {children}
  </section>
)
