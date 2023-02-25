'use client'

import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'
import ProfileCareer from '@/components/profile/career/career'
import ProfileHeader from '@/components/profile/header/header'
import ProfileMatches from '@/components/profile/matches/matches'
import { ProfileOverview } from '@/components/profile/overview/overview'
import ProfilePMScore from '@/components/profile/pm-score/pm-score'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']

const PlayerTestPage = () => (
  <main className="flex min-h-screen flex-col bg-light">
    <Navbar />
    <ProfileHeader />
    <GradientedBg />
    <Tabs tabs={tabs} size="medium">
      <ProfileOverview />
      <ProfileCareer />
      <ProfileMatches />
      <ProfilePMScore />
    </Tabs>
  </main>
)

export default PlayerTestPage

const GradientedBg = () => (
  <div
    className="absolute top-0 right-0 h-[30vh] w-screen"
    style={{
      background:
        'linear-gradient(200.96deg, rgba(208, 170, 70, 0.2) 0.66%, rgba(252, 214, 115, 0) 86.72%);',
    }}
  />
)
