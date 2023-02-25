import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { TableScrolledContext } from './scrolled-context'

interface IProps {
  children: React.ReactNode
  className?: string
}

export const TableRightColumn = ({ children, className }: IProps) => {
  const { setIsScrolled } = useContext(TableScrolledContext)

  return (
    <div
      className={cx('flex flex-col overflow-x-auto', className)}
      onScroll={e => setIsScrolled((e.target as any).scrollLeft > 8)}
    >
      {children}
    </div>
  )
}

export default TableRightColumn
