import clsx from 'clsx'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  children: React.ReactNode
  className?: string
}
export const TableSummaryRow = ({ children, className }: IProps) => {
  const { summaryRowHeight, columnsClass, paddingRightColumnClass } =
    useContext(TableSettingsContext)
  return (
    <div
      className={clsx(
        'grid min-w-max items-center justify-end justify-items-center gap-x-4 pr-5 text-body-md md:gap-x-7',
        className,
        columnsClass,
        paddingRightColumnClass || 'pl-4',
      )}
      style={{
        height: summaryRowHeight,
      }}
    >
      {children}
    </div>
  )
}

export default TableSummaryRow
