import clsx from 'clsx'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  expanded?: boolean
  children: React.ReactNode
  className?: string
  // customHeight?: string
}
export const TableRow = ({
  children,
  expanded,
  className,
}: // customHeight,
IProps) => {
  const {
    rowHeight,
    expandedRowHeight,
    columnsClass,
    paddingRightColumnClass,
  } = useContext(TableSettingsContext)

  return (
    <div
      className={clsx(
        'grid min-w-max items-center justify-end justify-items-center gap-x-4 pr-5 text-body-md md:gap-x-7',
        className,
        columnsClass,
        paddingRightColumnClass || 'pl-4',
      )}
      style={{
        // height: customHeight || (expanded ? expandedRowHeight : rowHeight),
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
