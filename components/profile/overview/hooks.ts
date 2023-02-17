import { useQuery } from '@tanstack/react-query'
import { returnAfterTime } from 'dummy-api/helpers'
import { profileOverviewData } from 'dummy-api/profile/overview'

export const useProfileOverview = (id: string) =>
  useQuery({
    queryKey: ['profile-overview', id],
    queryFn: returnAfterTime(profileOverviewData, 200),
  })
