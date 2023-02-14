import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Heading = ({ children }: Props) => (
  <h2 className="pb-5 text-heading-xs font-bold text-dark">{children}</h2>
)
