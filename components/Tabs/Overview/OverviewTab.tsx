import { Heading } from '@/components/common/Heading/Heading'
import { SectionContainer } from '@/components/common/SectionContainer/SectionContainer'

import { BasePlayerData } from './Sections/BasePlayerData/BasePlayerData'
import { PlayerDataSlider } from './Sections/PlayerDataSlider/PlayerDataSlider'

export const OverviewTab = () => (
  <div className="grid grid-cols-1 gap-4">
    <SectionContainer>
      <Heading>W skrócie</Heading>
      <PlayerDataSlider />
    </SectionContainer>
    <SectionContainer className="pb-0">
      <Heading>Dane podstawowe</Heading>
      <BasePlayerData />
    </SectionContainer>
  </div>
)
