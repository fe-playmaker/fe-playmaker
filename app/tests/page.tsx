'use client'

import React, { useState } from 'react'

import MatchResult from '@/components/common/Match-result/match-result'
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
      </main>
    </>
  )
}

export default TestingPage
