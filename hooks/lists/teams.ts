import { useQuery } from '@tanstack/react-query'
import { teamsListData } from 'dummy-api/lists/teams'

import { mapToSelectItem } from './helpers'

export const useTeamsList = () =>
  useQuery({
    queryKey: ['teams-list'],
    queryFn: () => mapToSelectItem(teamsListData),
  })
