import { cx } from 'class-variance-authority'

import { TableEmptyCell } from '../data/empty'

interface IProps {
  value: number | string | undefined
  children?: React.ReactNode
  className?: string
}
export const TableSummaryValue = ({ value, children, className }: IProps) =>
  value ? (
    <span className={cx('font-inter font-bold text-darkAlpha-40', className)}>
      {value}
      {children}
    </span>
  ) : (
    <TableEmptyCell />
  )

export default TableSummaryValue
