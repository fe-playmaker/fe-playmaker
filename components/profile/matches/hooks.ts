import { useQuery } from '@tanstack/react-query'
import { profileMatchesData } from 'dummy-api/profile/matches'
import { returnAfterTime } from 'utils/return-after-time'

export const useProfileMatches = (id: string) =>
  useQuery({
    queryKey: ['profile-matches', id],
    queryFn: returnAfterTime(profileMatchesData, 700),
  })
