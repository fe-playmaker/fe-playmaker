import clsx from 'clsx'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  expanded?: boolean
  children: React.ReactNode
  className?: string
  addHeight?: string
}
export const TableRow = ({
  children,
  expanded,
  className,
  addHeight,
}: IProps) => {
  const {
    rowHeight,
    expandedRowHeight,
    columnsClass,
    paddingRightColumnClass,
  } = useContext(TableSettingsContext)

  return (
    <div
      className={clsx(
        'grid min-w-full items-center justify-end justify-items-center gap-x-4 pr-5 text-body-md',
        className,
        columnsClass,
        paddingRightColumnClass || 'pl-4',
      )}
      style={{
        height: `calc(${expanded ? expandedRowHeight : rowHeight} + ${
          addHeight || '0px'
        })`,
        paddingBottom: expanded
          ? `calc(${expandedRowHeight} - ${rowHeight})`
          : 0,
      }}
    >
      {children}
    </div>
  )
}

export default TableRow
