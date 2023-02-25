import { TProfileOverview } from 'types/profile'

import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { PlayMakerScoreContent } from './content'

const PlayMakerScoreSection = ({
  pmScore,
}: Pick<TProfileOverview, 'pmScore'>) => (
  <SectionContainer>
    <Heading className="flex items-center gap-2">
      PlayMaker Score <ArrowRightIcon className="icon-16" />
    </Heading>
    <PlayMakerScoreContent pmScore={pmScore} />
  </SectionContainer>
)

export default PlayMakerScoreSection