import { cx } from 'class-variance-authority'

interface IProps {
  className?: string
  text: string
}
export const TableSummaryText = ({ text, className }: IProps) => (
  <span
    className={cx(
      'font-inter text-body-sm font-medium text-darkAlpha-40',
      className,
    )}
  >
    {text}
  </span>
)

export default TableSummaryText
