import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  className?: string
  expanded?: boolean
  children: React.ReactNode
  customHeight?: string
}
export const TableLeftCell = ({
  children,
  className,
  expanded,
  customHeight,
}: IProps) => {
  const { rowHeight, expandedRowHeight } = useContext(TableSettingsContext)

  return (
    <div
      className={cx('z-10 bg-white', className)}
      style={{
        height: customHeight || (expanded ? expandedRowHeight : rowHeight),
      }}
    >
      {children}
    </div>
  )
}

export default TableLeftCell
