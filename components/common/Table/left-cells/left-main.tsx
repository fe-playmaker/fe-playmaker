import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  className?: string
  expanded?: boolean
  children: React.ReactNode
  addHeight?: string
}
export const TableLeftCell = ({
  children,
  className,
  expanded,
  addHeight,
}: IProps) => {
  const { rowHeight, expandedRowHeight } = useContext(TableSettingsContext)

  return (
    <div
      className={cx('z-10 bg-white', className)}
      style={{
        height: `calc(${expanded ? expandedRowHeight : rowHeight} + ${
          addHeight || '0px'
        })`,
      }}
    >
      {children}
    </div>
  )
}

export default TableLeftCell
