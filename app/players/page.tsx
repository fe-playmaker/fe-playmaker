import React from 'react'

import Tabs from '@/components/common/Tabs/tabs'
import { Button } from '@/components/common/Button/Button'
import { Avatar } from '@/components/common/Avatar'
import { Chips } from '@/components/common/Chips/Chips'
import { PlayMakerScore } from '@/components/common/Score/PlayMakerScore'

import { USER_DATA } from 'constants/userData'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']
const chips = [
  {
    title: 'Tylko z udziałem zawodnika',
    isSelected: true
  }, 
  {
    title: 'Wszystkie', 
    isSelected: false
  }, 
  {
    title: 'Tylko wideo',
    isSelected: false
  }, 
]

const PlayerTestPage = () => (
  <main>
    <Tabs tabs={tabs} size="medium">
      {tabs.map(tab => (
        <p key={tab}>{tab}</p>
      ))}
    </Tabs>
    <Button intent="primary">Primary</Button>
    <Avatar size='small' image={USER_DATA.image} playerName={`${USER_DATA.name} ${USER_DATA.surname}`} />
    <PlayMakerScore scoreValue={USER_DATA.score} />
    <Chips chips={chips} />
  </main>
)

export default PlayerTestPage
