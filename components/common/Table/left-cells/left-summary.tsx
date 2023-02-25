import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  className?: string
  children: React.ReactNode
}
export const TableLeftSummaryCell = ({ children, className }: IProps) => {
  const { summaryRowHeight } = useContext(TableSettingsContext)

  return (
    <div
      className={cx('z-10 flex items-center bg-white', className)}
      style={{ height: summaryRowHeight }}
    >
      {children}
    </div>
  )
}

export default TableLeftSummaryCell
