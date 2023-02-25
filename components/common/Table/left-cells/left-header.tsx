import { cx } from 'class-variance-authority'

interface IProps {
  className?: string
  children: React.ReactNode
}
export const TableLeftHeaderCell = ({ className, children }: IProps) => (
  <div
    className={cx(
      'z-10 grid grid-rows-[2rem] items-end justify-items-start border-b-2 border-darkAlpha-5 pb-3',
      className,
    )}
  >
    {children}
  </div>
)

export default TableLeftHeaderCell
