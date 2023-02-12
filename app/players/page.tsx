'use client'

import { useState } from 'react'

import { InputSelect, StateSelect } from '@/components/common/Select/select'
import { ISelectItem } from '@/components/common/Select/types'
import Tabs from '@/components/common/Tabs/tabs'
import Navbar from '@/components/Navbar/navbar'

const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']

const testSelectItems: ISelectItem[] = [
  { value: 'krak', name: 'Krakow' },
  { value: 'pozn', name: 'Poznan' },
  { value: 'szcz', name: 'Szczecin' },
]

const PlayerTestPage = () => {
  const [currentSelectValue, setCurrentSelectValue] = useState<string>()

  return (
    <>
      <Navbar />
      <main className="h-screen bg-darkAlpha-5">
        <Tabs tabs={tabs} size="medium">
          {tabs.map(tab => (
            <p key={tab}>{tab}</p>
          ))}
        </Tabs>
        <div className="flex items-center justify-center gap-5">
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

export default PlayerTestPage
