import clsx from 'clsx'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  expanded?: boolean
  children: React.ReactNode
  className?: string
  customHeight?: string
}
export const TableRow = ({
  children,
  expanded,
  className,
  customHeight,
}: IProps) => {
  const { rowHeight, expandedRowHeight, columnsClass } =
    useContext(TableSettingsContext)
  return (
    <div
      className={clsx(
        'grid min-w-max items-center justify-items-center gap-x-4 pl-4 pr-5 text-body-md',
        className,
        columnsClass,
      )}
      style={{
        height: customHeight || (expanded ? expandedRowHeight : rowHeight),
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
