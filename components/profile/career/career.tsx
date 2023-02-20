'use client'

import { AnimatePresence } from 'framer-motion'

import TabLoadingSpinner from '../common/tab-loader/spinner'
import { TabContentWrapper } from '../common/tab-loader/tab-wrapper'
import { useProfileCareer } from './hooks'
import SeasonPanel from './season-panel'

const ProfileCareer = () => {
  const { data, isLoading } = useProfileCareer('69')

  return (
    <AnimatePresence mode="wait">
      {!data || isLoading ? (
        <TabLoadingSpinner key="career-spinner" />
      ) : (
        <TabContentWrapper
          className="mt-4 flex flex-col gap-4 pb-11"
          key="career-content"
        >
          {data.map(season => (
            <SeasonPanel {...season} />
          ))}
        </TabContentWrapper>
      )}
    </AnimatePresence>
  )
}

export default ProfileCareer
