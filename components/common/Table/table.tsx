import { cx } from 'class-variance-authority'
import { useIsDesktop } from 'hooks/use-is-desktop'
import { useMemo, useState } from 'react'

import { TableScrolledContext } from './scrolled-context'
import { ITableSettings, TableSettingsContext } from './settings-context'

interface ITableDektop {
  desktopRowHeight?: string
  desktopExpandedRowHeight?: string
  desktopSummaryRowHeight?: string
  desktopColumnsClass?: string
}

interface IProps extends ITableSettings, ITableDektop {
  className?: string
  children: React.ReactNode
}
export const Table = ({
  className,
  children,
  desktopColumnsClass,
  desktopExpandedRowHeight,
  desktopRowHeight,
  desktopSummaryRowHeight,
  ...baseTableSettings
}: IProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrolledValue = useMemo(
    () => ({ isScrolled, setIsScrolled }),
    [isScrolled],
  )

  const isDesktop = useIsDesktop()

  const settingsValue = useMemo<ITableSettings>(() => {
    const baseSettings = { ...baseTableSettings }

    if (!isDesktop) return baseSettings

    if (desktopColumnsClass) baseSettings.columnsClass = desktopColumnsClass
    if (desktopExpandedRowHeight)
      baseSettings.expandedRowHeight = desktopExpandedRowHeight
    if (desktopRowHeight) baseSettings.rowHeight = desktopRowHeight
    if (desktopSummaryRowHeight)
      baseSettings.summaryRowHeight = desktopSummaryRowHeight

    baseSettings.paddingRightColumnClass = ''

    return baseSettings
  }, [
    desktopColumnsClass,
    desktopExpandedRowHeight,
    desktopRowHeight,
    desktopSummaryRowHeight,
    isDesktop,
    baseTableSettings,
  ])

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
