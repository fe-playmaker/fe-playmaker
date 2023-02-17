import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Heading = ({ children }: Props) => (
  <h4 className="pb-5 font-poppins text-heading-xs font-bold text-dark">
    {children}
  </h4>
)
