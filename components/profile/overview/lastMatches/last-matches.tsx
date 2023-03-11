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
    <SectionContainer className="px-0 md:px-0" layout>
      <div className="flex items-center justify-between px-6 md:px-8">
        <Heading
          className="flex cursor-pointer items-center gap-2 pb-0 md:pb-0"
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
          desktopSize="medium"
          menuRightSide
        />
      </div>
      <div className="mx-6 my-8 mb-5 flex items-center gap-7 bg-white p-5 pl-7 shadow-default md:mx-8">
        {lastMatches.additional.type === 'standedOut' ? (
          <TrendUpIcon className="icon-32" />
        ) : (
          <TrendDownIcon className="icon-32" />
        )}

        <div className="font-inter text-body-sm md:text-body-md">
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

      <div className="mt-4 flex justify-center">
        <Button
          size="small"
          desktopSize="medium"
          text="Zobacz więcej"
          intent="secondary"
          onClick={() => goToTab(2)}
        />
      </div>
    </SectionContainer>
  )
}

export default LastMatchesSection
