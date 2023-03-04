import { useQuery } from '@tanstack/react-query'
import { teamsListData } from 'dummy-api/lists/teams'
import { TTeamsList, TTeamsListParams } from 'types/lists'

import { mapToSelectItem } from './helpers'

export const useTeamsList = (filters?: TTeamsListParams) =>
  useQuery({
    queryKey: ['teams-list', filters ? { ...filters } : 'full'],
    queryFn: () => mapToSelectItem(teamsListData),
  })

export const mapTeamsWithCompetition = <T extends TTeamsList>(items: T[]) =>
  items.map(({ name, competition, ...values }) => ({
    name: `${name}${competition ? ` (${competition})` : ''}`,
    competition,
    ...values,
  }))
