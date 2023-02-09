import { USER_DATA } from 'constants/userData'
import SendIcon from 'img/icons/Send.svg'
import React from 'react'

import { Avatar } from '@/components/common/Avatar/Avatar'
import { Button } from '@/components/common/Button/Button'
import { Chips } from '@/components/common/Chips/Chips'
import { PlayMakerScore } from '@/components/common/Score/PlayMakerScore'
import Tabs from '@/components/common/Tabs/tabs'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']
const chips = [
  {
    title: 'Tylko z udziałem zawodnika',
    isSelected: true,
  },
  {
    title: 'Wszystkie',
    isSelected: false,
  },
  {
    title: 'Tylko wideo',
    isSelected: false,
  },
]

const PlayerTestPage = () => (
  <main>
    <Tabs tabs={tabs} size="medium">
      {tabs.map(tab => (
        <p key={tab}>{tab}</p>
      ))}
    </Tabs>
    <Button intent="primary" text="Send" size="medium" icon={<SendIcon />} />
    <Avatar
      size="small"
      intent="premium"
      image={USER_DATA.image}
      alt={`${USER_DATA.name} ${USER_DATA.surname}`}
    />
    <PlayMakerScore intent="trendUp" scoreValue={USER_DATA.score} />
    <Chips chips={chips} />
  </main>
)

export default PlayerTestPage
