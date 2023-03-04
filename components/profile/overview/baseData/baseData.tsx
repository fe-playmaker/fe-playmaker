import { TProfileOverview } from 'types/profile'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { PlayerBaseData } from './playerBaseData'

const BaseDataSection = ({
  playerData,
}: Pick<TProfileOverview, 'playerData'>) => (
  <SectionContainer className="pb-0" layout>
    <Heading>Dane podstawowe</Heading>
    <PlayerBaseData {...playerData} />
  </SectionContainer>
)

export default BaseDataSection
