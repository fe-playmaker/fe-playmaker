import { useQuery } from '@tanstack/react-query'
import { competitionLevelsListData } from 'dummy-api/lists/competition-levels'

import { mapToSelectItem } from './helpers'

export const useCompetitionLevelsList = () =>
  useQuery({
    queryKey: ['competition-levels-list'],
    queryFn: () => mapToSelectItem(competitionLevelsListData),
  })
