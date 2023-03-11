import { ReactElement, ReactNode } from 'react'

export interface IModalProps {
  title: string
  caption?: string
  show: boolean
  closeModal: () => void
  btnSecondaryText?: string
  btnSecondaryIcon?: ReactElement
  btnSecondaryClick?: () => void
  btnPrimaryText?: string
  btnPrimaryIcon?: ReactElement
  btnPrimaryClick?: () => void
  btnVertical?: boolean
  children: ReactNode
}
