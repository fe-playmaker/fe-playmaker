import { useQuery } from '@tanstack/react-query'
import { returnAfterTime } from 'dummy-api/helpers'
import { profileHeaderData } from 'dummy-api/profile/header'

export const useProfileHeader = (id: string) =>
  useQuery({
    queryKey: ['profile-header', id],
    queryFn: returnAfterTime(profileHeaderData, 2000),
  })
