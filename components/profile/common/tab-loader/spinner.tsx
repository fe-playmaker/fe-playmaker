'use client'

import { cx } from 'class-variance-authority'
import { motion } from 'framer-motion'

import Spinner from '@/components/common/Spinner/spinner'

interface IProps {
  className?: string
  size?: React.ComponentProps<typeof Spinner>['size']
  desktopSize?: React.ComponentProps<typeof Spinner>['desktopSize']
}

const TabLoadingSpinner = ({
  className,
  size = 'medium',
  desktopSize = 'large',
}: IProps) => (
  <motion.div
    className={cx(
      'mt-4 flex h-[calc(100%+5rem)] items-center justify-center bg-white pb-[5rem]',
      className,
    )}
    exit={{ opacity: 0.3 }}
    transition={{ duration: 0.1 }}
  >
    <motion.div exit={{ y: 50, opacity: 0 }} transition={{ duration: 0.15 }}>
      <Spinner size={size} desktopSize={desktopSize} />
    </motion.div>
  </motion.div>
)

export default TabLoadingSpinner
