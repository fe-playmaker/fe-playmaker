import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const SectionContainer = ({ children }: Props) => (
  <section className="bg-white p-6">{children}</section>
)
