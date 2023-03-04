import { useGoToTab } from 'hooks/go-to-tab'
import { mapTeamsWithCompetition, useTeamsList } from 'hooks/lists/teams'
import { TProfileOverviewLastMatches } from 'types/profile'

import { Button } from '@/components/common/Button/Button'
import { InputSelect } from '@/components/common/Select/select'
import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'
import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { LastMatchesPanel } from './panel'

interface IProps {
  playerFirstName: string
  lastMatches: TProfileOverviewLastMatches
  defaultTeamId: string
}
const LastMatchesSection = ({
  lastMatches,
  playerFirstName,
  defaultTeamId,
}: IProps) => {
  const { goToTab } = useGoToTab()
  const { data: teamsList } = useTeamsList({ playerId: '96' })

  return (
    <SectionContainer className="px-0" layout>
      <div className="flex items-center justify-between px-6">
        <Heading
          className="flex cursor-pointer items-center gap-2 pb-0"
          onClick={() => goToTab(2)}
        >
          Ostatnie mecze <ArrowRightIcon className="icon-16" />
        </Heading>
        <InputSelect
          name="Zespół"
          items={mapTeamsWithCompetition(teamsList || [])}
          inputName="teamId"
          defaultValue={defaultTeamId}
          size="small"
          menuRightSide
        />
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

      <LastMatchesPanel {...lastMatches.data} />

      <div className="flex justify-center">
        <Button
          size="small"
          text="Zobacz więcej"
          intent="secondary"
          onClick={() => goToTab(2)}
        />
      </div>
    </SectionContainer>
  )
}

export default LastMatchesSection
