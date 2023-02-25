import { cx } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { useContext } from 'react'

import { TableScrolledContext } from './scrolled-context'

interface IProps {
  className?: string
  children: React.ReactNode
}

export const TableLeftColumn = ({ className, children }: IProps) => {
  const { isScrolled } = useContext(TableScrolledContext)

  return (
    <div className={cx('relative flex flex-col', className)}>
      {isScrolled && (
        <motion.div
          className="absolute -right-4 z-0 h-full w-4 "
          style={{
            background:
              'linear-gradient(90deg, rgba(217, 217, 217, 0.24) 0%, rgba(217, 217, 217, 0) 100%)',
          }}
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -2, opacity: 0 }}
          transition={{ type: 'tween', duration: 0.15 }}
        />
      )}
      {children}
    </div>
  )
}

export default TableLeftColumn
