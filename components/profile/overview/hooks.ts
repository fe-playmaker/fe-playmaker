import { useQuery } from '@tanstack/react-query'
import { profileOverviewData } from 'dummy-api/profile/overview'
import { returnAfterTime } from 'utils/return-after-time'

export const useProfileOverview = (id: string) =>
  useQuery({
    queryKey: ['profile-overview', id],
    queryFn: returnAfterTime(profileOverviewData, 200),
  })
