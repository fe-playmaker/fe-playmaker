import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { TableSettingsContext } from '../settings-context'

interface IProps {
  className?: string
  children: React.ReactNode
}
export const TableHeaderRow = ({ className, children }: IProps) => {
  const { columnsClass, paddingRightColumnClass } =
    useContext(TableSettingsContext)

  return (
    <div
      className={cx(
        'grid min-w-max grid-rows-[2rem] items-end justify-end justify-items-center gap-x-4 border-b-2 border-darkAlpha-5 pb-3 pr-5',
        className,
        columnsClass,
        paddingRightColumnClass || 'pl-4',
      )}
    >
      {children}
    </div>
  )
}

export default TableHeaderRow
