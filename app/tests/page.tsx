'use client'

import SendIcon from 'img/icons/Send.svg'
import React, { useState } from 'react'

import { Avatar } from '@/components/common/Avatar/Avatar'
import { Button } from '@/components/common/Button/Button'
import { Chips } from '@/components/common/Chips/Chips'
import MatchResult from '@/components/common/Match-result/match-result'
import { PlayMakerScore } from '@/components/common/Score/PlayMakerScore'
import { InputSelect, StateSelect } from '@/components/common/Select/select'
import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'

import { tabs, testMatchResultData, testSelectItems } from './data'

const TestingPage = () => {
  const [currentSelectValue, setCurrentSelectValue] = useState<string>()

  return (
    <>
      <Navbar />
      <main>
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
          <Avatar type="premium" size="profile" alt="Janusz Korwin" />
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
