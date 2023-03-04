'use client'

import { cx } from 'class-variance-authority'
import { motion } from 'framer-motion'

import Spinner from '@/components/common/Spinner/spinner'

interface IProps {
  className?: string
  size?: React.ComponentProps<typeof Spinner>['size']
}

const TabLoadingSpinner = ({ className, size = 'medium' }: IProps) => (
  <motion.div
    className={cx(
      'mt-4 flex h-full items-center justify-center bg-white',
      className,
    )}
    exit={{ opacity: 0.3 }}
    transition={{ duration: 0.1 }}
  >
    <motion.div exit={{ y: 50, opacity: 0 }} transition={{ duration: 0.15 }}>
      <Spinner size={size} />
    </motion.div>
  </motion.div>
)

export default TabLoadingSpinner
