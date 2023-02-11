import React from 'react'

import MatchResult from '@/components/common/Match-result/match-result'
import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'

import { tabs, testMatchResultData } from './data'

const TestingPage = () => (
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
    </main>
  </>
)

export default TestingPage
