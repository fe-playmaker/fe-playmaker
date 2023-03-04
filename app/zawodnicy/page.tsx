'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import {
  TProfileHeader,
  TProfileOverview,
  TProfileOverviewLastMatches,
  TProfileOverviewPMScore,
  TProfileOverviewRegularity,
} from 'types/profile'

import { TabsIndexContext } from '@/components/common/Tabs/index-context'
import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'
import ProfileCareer from '@/components/profile/career/career'
import TabLoadingSpinner from '@/components/profile/common/tab-loader/spinner'
import { TabContentWrapper } from '@/components/profile/common/tab-loader/tab-wrapper'
import ProfileHeader from '@/components/profile/header/header'
import { useProfileHeader } from '@/components/profile/header/hooks'
import ProfileMatches from '@/components/profile/matches/matches'
import {
  useProfileOverview,
  useProfileOverviewLastMatches,
  useProfileOverviewPMScore,
  useProfileOverviewRegularity,
} from '@/components/profile/overview/hooks'
import { ProfileOverview } from '@/components/profile/overview/overview'
import ProfilePMScore from '@/components/profile/pm-score/pm-score'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']

const PlayerTestPage = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const tabContextValue = useMemo(
    () => ({
      tabIndex,
      setTabIndex,
    }),
    [tabIndex, setTabIndex],
  )

  const { data: headerData, isLoading: headerLoading } = useProfileHeader('96')
  const { data: overviewData, isLoading: overviewLoading } =
    useProfileOverview('96')
  const { data: overviewLastMatches, isLoading: overviewLastMatchesLoading } =
    useProfileOverviewLastMatches('96')
  const { data: overviewRegularity, isLoading: overviewRegularityLoading } =
    useProfileOverviewRegularity('96')
  const { data: overviewPMScore, isLoading: overviewPMScoreLoading } =
    useProfileOverviewPMScore('96')

  const isLoading =
    headerLoading ||
    overviewLoading ||
    overviewRegularityLoading ||
    overviewLastMatchesLoading ||
    overviewPMScoreLoading

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
            <TabsIndexContext.Provider value={tabContextValue}>
              <Tabs tabs={tabs} size="medium">
                <ProfileOverview
                  data={overviewData as TProfileOverview}
                  lastMatches={
                    overviewLastMatches as TProfileOverviewLastMatches
                  }
                  pmScore={overviewPMScore as TProfileOverviewPMScore}
                  regularity={overviewRegularity as TProfileOverviewRegularity}
                />
                <ProfileCareer />
                <ProfileMatches />
                <ProfilePMScore />
              </Tabs>
            </TabsIndexContext.Provider>
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
