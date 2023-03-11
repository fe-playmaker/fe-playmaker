import { TProfilePMScore } from 'types/profile'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { PlayMakerScoreContent } from '../../overview/playMakerScore/content'

const PMScoreGraphSection = ({ score, lastScore }: TProfilePMScore) => (
  <SectionContainer layout>
    <Heading className="flex items-center gap-2">PlayMaker Score</Heading>
    <PlayMakerScoreContent score={score} lastScore={lastScore} />
  </SectionContainer>
)

export default PMScoreGraphSection
