import { TProfileOverview } from 'types/profile'

import ArrowDownIcon from '@/icons/ArrowDown.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { SimilarPlayersContent } from './content'

const SimiliarPlayersSection = (
  props: Pick<TProfileOverview, 'similarPlayers'>,
) => (
  <SectionContainer>
    <Heading>Podobni zawodnicy</Heading>
    <SimilarPlayersContent {...props} />
    <div className="flex justify-center">
      <p className="flex items-center gap-2 pt-6 text-label-sm text-darkAlpha-40">
        Pokaż kolejnych <ArrowDownIcon className="icon-16" />
      </p>
    </div>
  </SectionContainer>
)

export default SimiliarPlayersSection
