'use client'

import { motion } from 'framer-motion'

import Spinner from '@/components/common/Spinner/spinner'

const TabLoadingSpinner = () => (
  <motion.div
    className="mt-4 flex h-full items-center justify-center bg-white"
    exit={{ opacity: 0.3 }}
    transition={{ duration: 0.1 }}
  >
    <motion.div exit={{ y: 50, opacity: 0 }} transition={{ duration: 0.15 }}>
      <Spinner size="medium" />
    </motion.div>
  </motion.div>
)

export default TabLoadingSpinner
