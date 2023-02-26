'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { TProfileHeader, TProfileOverview } from 'types/profile'

import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'
import ProfileCareer from '@/components/profile/career/career'
import TabLoadingSpinner from '@/components/profile/common/tab-loader/spinner'
import { TabContentWrapper } from '@/components/profile/common/tab-loader/tab-wrapper'
import ProfileHeader from '@/components/profile/header/header'
import { useProfileHeader } from '@/components/profile/header/hooks'
import ProfileMatches from '@/components/profile/matches/matches'
import { useProfileOverview } from '@/components/profile/overview/hooks'
import { ProfileOverview } from '@/components/profile/overview/overview'
import ProfilePMScore from '@/components/profile/pm-score/pm-score'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']

const PlayerTestPage = () => {
  const { data: headerData, isLoading: headerLoading } = useProfileHeader('69')
  const { data: overviewData, isLoading: overviewLoading } =
    useProfileOverview('overview')

  const isLoading = headerLoading || overviewLoading

  return (
    <main className="z-0 flex min-h-screen flex-col bg-light">
      <Navbar />
      {headerData?.premium && <GradientedBg />}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <TabLoadingSpinner
            key="profile-spinner"
            className="mt-0 flex-1"
            size="large"
          />
        ) : (
          <TabContentWrapper
            key="profile-content"
            className="flex flex-1 flex-col"
          >
            <ProfileHeader data={headerData as TProfileHeader} />
            <Tabs tabs={tabs} size="medium">
              <ProfileOverview data={overviewData as TProfileOverview} />
              <ProfileCareer />
              <ProfileMatches />
              <ProfilePMScore />
            </Tabs>
          </TabContentWrapper>
        )}
      </AnimatePresence>
    </main>
  )
}

export default PlayerTestPage

const GradientedBg = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.1 } }}
    className="absolute top-0 right-0 z-10 h-[30vh] w-screen"
    style={{
      background:
        'linear-gradient(200.96deg, rgba(208, 170, 70, 0.2) 0.66%, rgba(252, 214, 115, 0) 86.72%)',
    }}
  />
)
