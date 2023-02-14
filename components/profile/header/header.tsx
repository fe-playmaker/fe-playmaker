'use client'

import { AnimatePresence, motion } from 'framer-motion'

import SpinnerIcon from '@/icons/Spinner.svg'

import HeaderContent from './header-content'
import { useProfileHeader } from './hooks'

const ProfileHeader = () => {
  const { data, isLoading } = useProfileHeader('69')

  return (
    <motion.div className="relative z-20 mt-9 bg-white px-6 pb-6">
      <AnimatePresence mode="wait">
        {isLoading || !data ? (
          <motion.div
            key="headerLoader"
            className="flex items-center justify-center py-10"
            exit={{ opacity: 0 }}
          >
            <SpinnerIcon className="h-8 animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            key="headerContent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <HeaderContent {...data} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProfileHeader
