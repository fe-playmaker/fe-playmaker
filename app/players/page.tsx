import { USER_DATA } from 'constants/userData'
import SendIcon from 'img/icons/Send.svg'
import React from 'react'

import { Avatar } from '@/components/common/Avatar/Avatar'
import { Button } from '@/components/common/Button/Button'
import { Chips } from '@/components/common/Chips/Chips'
import { PlayMakerScore } from '@/components/common/Score/PlayMakerScore'
import Tabs from '@/components/common/Tabs/tabs'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']
const chips = ['Tylko z udziałem zawodnika', 'Wszystkie', 'Tylko wideo']

const PlayerTestPage = () => (
  <main>
    <Tabs tabs={tabs} size="medium">
      {tabs.map(tab => (
        <p key={tab}>{tab}</p>
      ))}
    </Tabs>
    <Button
      buttonType="primary"
      text="Send"
      buttonSize="small"
      iconSize="small"
      iconType="primary"
      icon={<SendIcon />}
    />
    <Avatar
      type="premiumProfile"
      alt={`${USER_DATA.name} ${USER_DATA.surname}`}
    />
    <PlayMakerScore trendScoreType="trendUp" scoreValue={USER_DATA.score} />
    <Chips chips={chips} />
  </main>
)

export default PlayerTestPage
