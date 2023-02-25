import { TProfileOverview } from 'types/profile'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { PlayerSlider } from './slider'

const InShortSection = (props: Pick<TProfileOverview, 'inShort'>) => (
  <SectionContainer className="mt-4">
    <Heading>W skrócie</Heading>

    <PlayerSlider {...props} />
  </SectionContainer>
)

export default InShortSection
