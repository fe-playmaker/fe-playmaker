import { cx } from 'class-variance-authority'

import { TableEmptyCell } from './empty'

interface IProps {
  value: string | number
  minuteColon?: boolean
  className?: string
}
export const TableDataBadge = ({ value, minuteColon, className }: IProps) =>
  value ? (
    <div
      className={cx(
        'px-3 py-[0.1567rem] text-body-xs font-bold text-darkAlpha-40 outline outline-1 outline-light',
        className,
      )}
    >
      {value}
      {minuteColon && '’'}
    </div>
  ) : (
    <TableEmptyCell />
  )

export default TableDataBadge
