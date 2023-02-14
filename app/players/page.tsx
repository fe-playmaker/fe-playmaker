'use client'

import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'
import ProfileHeader from '@/components/profile/header/header'

export const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']

const PlayerTestPage = () => (
  <main className="min-h-screen bg-light">
    <Navbar />
    <ProfileHeader />
    <GradientedBg />
    <Tabs tabs={tabs} size="medium">
      {tabs.map(tab => (
        <p key={tab}>{tab}</p>
      ))}
    </Tabs>
  </main>
)

export default PlayerTestPage

const GradientedBg = () => (
  <div
    className="absolute top-0 h-[30vh] w-screen"
    style={{
      background:
        'linear-gradient(200.96deg, rgba(208, 170, 70, 0.2) 0.66%, rgba(252, 214, 115, 0) 86.72%);',
    }}
  />
)
