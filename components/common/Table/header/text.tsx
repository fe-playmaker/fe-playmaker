import { cx } from 'class-variance-authority'

interface IProps {
  className?: string
  text: string
}
export const TableHeaderText = ({ text, className }: IProps) => (
  <span
    className={cx(
      'font-inter text-body-xs font-medium text-darkAlpha-40 md:text-body-sm',
      className,
    )}
  >
    {text}
  </span>
)

export default TableHeaderText
