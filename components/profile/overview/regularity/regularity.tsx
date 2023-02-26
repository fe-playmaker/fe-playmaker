import { mapTeamsWithCompetition, useTeamsList } from 'hooks/lists/teams'
import { TProfileOverviewRegularity } from 'types/profile'

import { InputSelect } from '@/components/common/Select/select'

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

  return (
    <SectionContainer>
      <div className="flex items-center justify-between">
        <Heading className="flex items-center gap-2 pb-0">
          Regularność gry
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

      <RegularityContent {...data} playerName={playerName} />
    </SectionContainer>
  )
}

export default RegularitySection
