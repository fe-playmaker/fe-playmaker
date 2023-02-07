import React from 'react'

import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']

const PlayerTestPage = () => (
  <>
    <Navbar />
    <main>
      <Tabs tabs={tabs} size="medium">
        {tabs.map(tab => (
          <p key={tab}>{tab}</p>
        ))}
      </Tabs>
    </main>
  </>
)

export default PlayerTestPage
