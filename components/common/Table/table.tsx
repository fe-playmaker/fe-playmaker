import { cx } from 'class-variance-authority'
import { useMemo, useState } from 'react'

import { TableScrolledContext } from './scrolled-context'
import { ITableSettings, TableSettingsContext } from './settings-context'

interface IProps extends ITableSettings {
  className?: string
  children: React.ReactNode
}
export const Table = ({
  className,
  children,
  rowHeight,
  summaryRowHeight,
  expandedRowHeight,
  columnsClass,
  paddingRightColumnClass,
}: IProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrolledValue = useMemo(
    () => ({ isScrolled, setIsScrolled }),
    [isScrolled],
  )

  const settingsValue = useMemo(
    () => ({
      rowHeight,
      summaryRowHeight,
      expandedRowHeight,
      columnsClass,
      paddingRightColumnClass,
    }),
    [
      rowHeight,
      summaryRowHeight,
      expandedRowHeight,
      columnsClass,
      paddingRightColumnClass,
    ],
  )

  return (
    <div
      className={cx(
        'grid grid-cols-[max-content_1fr] [&>*]:font-inter',
        className,
      )}
    >
      <TableScrolledContext.Provider value={scrolledValue}>
        <TableSettingsContext.Provider value={settingsValue}>
          {children}
        </TableSettingsContext.Provider>
      </TableScrolledContext.Provider>
    </div>
  )
}

export default Table
