import { useQuery } from '@tanstack/react-query'
import { profileHeaderData } from 'dummy-api/profile/header'
import { returnAfterTime } from 'utils/return-after-time'

export const useProfileHeader = (id: string) =>
  useQuery({
    queryKey: ['profile-header', id],
    queryFn: returnAfterTime(profileHeaderData, 200),
  })
