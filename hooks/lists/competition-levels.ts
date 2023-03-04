import { useQuery } from '@tanstack/react-query'
import { competitionLevelsListData } from 'dummy-api/lists/competition-levels'
import { TCompetitionLevelsListParams } from 'types/lists'

import { mapToSelectItem } from './helpers'

export const useCompetitionLevelsList = (
  filters?: TCompetitionLevelsListParams,
) =>
  useQuery({
    queryKey: ['competition-levels-list', filters ? { ...filters } : 'full'],
    queryFn: () => mapToSelectItem(competitionLevelsListData),
  })
