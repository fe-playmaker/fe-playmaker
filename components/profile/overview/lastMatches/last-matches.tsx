import { TProfileOverview } from 'types/profile'

import { Button } from '@/components/common/Button/Button'
import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'
import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { LastMatchesPanel } from './panel'

interface IProps {
  playerFirstName: string
  lastMatches: TProfileOverview['lastMatches']
}
const LastMatchesSection = ({ lastMatches, playerFirstName }: IProps) => (
  <SectionContainer className="px-0">
    <div className="flex items-center justify-between px-6">
      <Heading className="flex items-center gap-2 pb-0">
        Ostatnie mecze <ArrowRightIcon className="icon-16" />
      </Heading>
      <div className="flex items-center gap-2">
        <p className="text-label-sm text-darkAlpha-40">
          Pogoń Siedlce (3 liga)
        </p>
        <ArrowRightIcon className="rotate-90 icon-16" />
      </div>
    </div>
    <div className="mx-6 my-7 flex items-center gap-7 bg-white p-5 pl-7 shadow-default">
      {lastMatches.additional.type === 'standedOut' ? (
        <TrendUpIcon className="icon-32" />
      ) : (
        <TrendDownIcon className="icon-32" />
      )}

      <div className="font-inter text-body-sm">
        <h4 className="font-bold">PlayMaker Score</h4>
        <p className="font-medium text-darkAlpha-40">
          {playerFirstName}{' '}
          {lastMatches.additional.type === 'standedOut' &&
            'w ostatnich 5 meczach wyróżniał się'}
          {lastMatches.additional.type === 'playedWorse' &&
            'w ostatnich 5 meczach miał kilka poślizgnięć.'}
        </p>
      </div>
    </div>

    <LastMatchesPanel {...lastMatches.matches} />

    <div className="flex justify-center">
      <Button size="small" text="Zobacz więcej" intent="secondary" />
    </div>
  </SectionContainer>
)

export default LastMatchesSection
