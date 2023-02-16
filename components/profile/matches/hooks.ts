import { useQuery } from '@tanstack/react-query'
import { returnAfterTime } from 'dummy-api/helpers'
import { profileMatchesData } from 'dummy-api/profile/matches'

export const useProfileMatches = (id: string) =>
  useQuery({
    queryKey: ['profile-matches', id],
    queryFn: returnAfterTime(profileMatchesData, 200),
  })
