import { Heading } from '@/components/common/Heading/Heading'
import { SectionContainer } from '@/components/common/SectionContainer/SectionContainer'

import { BasePlayerData } from './BasePlayerData'
import { Slider } from './Slider'

export const OverviewTab = () => (
  <div className="grid grid-cols-1 gap-4">
    <SectionContainer>
      <Heading>W skrócie</Heading>
      <Slider />
    </SectionContainer>
    <SectionContainer>
      <Heading>Dane podstawowe</Heading>
      <BasePlayerData />
    </SectionContainer>
  </div>
)
