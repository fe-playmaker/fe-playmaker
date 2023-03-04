import { useQuery } from '@tanstack/react-query'
import { seasonsListData } from 'dummy-api/lists/seasons'
import { TSeasonsListParams } from 'types/lists'

import { mapToSelectItem } from './helpers'

export const useSeasonsList = (filters?: TSeasonsListParams) =>
  useQuery({
    queryKey: ['seasons-list', filters ? { ...filters } : 'full'],
    queryFn: () => mapToSelectItem(seasonsListData),
  })
