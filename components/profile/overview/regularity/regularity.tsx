import { TProfileOverview } from 'types/profile'

import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { RegularityContent } from './content'

interface IProps {
  data: TProfileOverview['regularity']
  playerName: string
}

const RegularitySection = ({ data, playerName }: IProps) => (
  <SectionContainer>
    <div className="flex items-center justify-between">
      <Heading className="flex items-center gap-2 pb-0">
        Regularność gry
      </Heading>
      <div className="flex items-center gap-2">
        <p className="text-label-sm text-darkAlpha-40">
          Pogoń Siedlce (3 liga)
        </p>
        <ArrowRightIcon className="rotate-90 icon-16" />
      </div>
    </div>

    <RegularityContent {...data} playerName={playerName} />
  </SectionContainer>
)

export default RegularitySection
