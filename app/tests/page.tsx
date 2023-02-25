'use client'

import SendIcon from 'img/icons/Send.svg'
import React, { useState } from 'react'

import { Avatar } from '@/components/common/Avatar/Avatar'
import Banner from '@/components/common/Banner/banner'
import { Button } from '@/components/common/Button/Button'
import { Chips } from '@/components/common/Chips/Chips'
import MatchResult from '@/components/common/Match-result/match-result'
import { PlayMakerScore } from '@/components/common/Score/PlayMakerScore'
import { InputSelect, StateSelect } from '@/components/common/Select/select'
import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'
import { useProfileHeader } from '@/components/profile/header/hooks'

import { tabs, testMatchResultData, testSelectItems } from './data'

const TestingPage = () => {
  const [currentSelectValue, setCurrentSelectValue] = useState<string>()
  const { data } = useProfileHeader('69')

  return (
    <>
      <Navbar />
      <header>
        <div className="px-5">
          <Banner
            btnText="Napisz"
            btnIcon={<SendIcon />}
            btnSize="extraSmall"
            btnIntent="primary"
            accentClass="before:bg-tertiary"
          >
            <span className="text-body-md font-bold">Szukam klubu</span>
            <span className="text-body-sm font-medium text-darkAlpha-40">
              Oczekiwania: zwrot za dojazdy...
            </span>
            <span className="text-body-sm font-medium text-darkAlpha-40 underline">
              Więcej
            </span>
          </Banner>
        </div>
      </header>
      <main className="bg-light">
        <Tabs tabs={tabs} size="medium">
          {tabs.map(tab => (
            <p key={tab}>{tab}</p>
          ))}
        </Tabs>
        <div className="px-5">
          <MatchResult data={testMatchResultData} />
        </div>
        <div className="mt-5 flex items-center justify-center gap-5">
          <StateSelect
            size="medium"
            name="Label"
            items={testSelectItems}
            currentValue={currentSelectValue}
            setCurrentValue={item => setCurrentSelectValue(item)}
          />
          <InputSelect
            size="small"
            type="filter"
            name="Label"
            items={testSelectItems}
            inputName="testselect"
          />
        </div>
        <Button
          intent="primary"
          size="small"
          text="Label"
          icon={<SendIcon />}
        />
        <div className="flex w-full justify-center pb-4">
          <Avatar
            type="premium"
            size="profile"
            alt="Janusz Korwin"
            src={data?.avatarUrl ?? ''}
          />
        </div>
        <PlayMakerScore trend="up" score={69} />
        <Chips
          chips={['Tylko z udziałem zawodnika', 'Wszystkie', 'Tylko wideo']}
        />
      </main>
    </>
  )
}

export default TestingPage
