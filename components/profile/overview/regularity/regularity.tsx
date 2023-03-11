import { useGoToTab } from 'hooks/go-to-tab'
import { mapTeamsWithCompetition, useTeamsList } from 'hooks/lists/teams'
import { TProfileOverviewRegularity } from 'types/profile'

import { InputSelect } from '@/components/common/Select/select'
import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { RegularityContent } from './content'

interface IProps {
  data: TProfileOverviewRegularity
  playerName: string
  defaultTeamId: string
}

const RegularitySection = ({ data, playerName, defaultTeamId }: IProps) => {
  const { data: teamsList } = useTeamsList({ playerId: '96' })
  const { goToTab } = useGoToTab()

  return (
    <SectionContainer className="md:pb-9" layout>
      <div className="flex items-center justify-between">
        <Heading className="flex items-center gap-2 pb-0 md:hidden">
          Regularność gry
        </Heading>
        <Heading
          onClick={() => goToTab(2)}
          className="hidden cursor-pointer items-center gap-2 md:flex md:pb-0"
        >
          <>
            Aktualna forma w{' '}
            {
              mapTeamsWithCompetition(teamsList ?? []).find(
                x => x.value === defaultTeamId,
              )?.name
            }
            <ArrowRightIcon className="icon-16" />
          </>
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

      <RegularityContent {...data} playerName={playerName} />
    </SectionContainer>
  )
}

export default RegularitySection
