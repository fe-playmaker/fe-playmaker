import { cx } from 'class-variance-authority'

import { TableEmptyCell } from './empty'

interface IProps {
  value: number | string
  children?: React.ReactNode
  className?: string
}
export const TableDataValue = ({ value, children, className }: IProps) =>
  value ? (
    <span className={cx('font-inter font-medium text-darkAlpha-40', className)}>
      {value}
      {children}
    </span>
  ) : (
    <TableEmptyCell />
  )

export default TableDataValue
