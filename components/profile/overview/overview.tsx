import { Heading } from '@/components/common/Heading/Heading'
import { SectionContainer } from '@/components/common/SectionContainer/SectionContainer'

import { PlayerBaseData } from './baseDataSection'
import { PlayerSlider } from './slider'

export const ProfileOverview = () => (
  <div className="grid grid-cols-1 gap-4">
    <SectionContainer>
      <Heading>W skrócie</Heading>
      <PlayerSlider />
    </SectionContainer>
    <SectionContainer className="pb-0">
      <Heading>Dane podstawowe</Heading>
      <PlayerBaseData />
    </SectionContainer>
  </div>
)
