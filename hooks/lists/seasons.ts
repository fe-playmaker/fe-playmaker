import { useQuery } from '@tanstack/react-query'
import { seasonsListData } from 'dummy-api/lists/seasons'

import { mapToSelectItem } from './helpers'

export const useSeasonsList = () =>
  useQuery({
    queryKey: ['seasons-list'],
    queryFn: () => mapToSelectItem(seasonsListData),
  })
