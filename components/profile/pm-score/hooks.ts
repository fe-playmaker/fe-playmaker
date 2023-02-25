import { useQuery } from '@tanstack/react-query'
import { profilePMScoreData } from 'dummy-api/profile/pm-score'
import { returnAfterTime } from 'utils/return-after-time'

export const useProfilePMScore = (id: string) =>
  useQuery({
    queryKey: ['profile-pmscore', id],
    queryFn: returnAfterTime(profilePMScoreData, 700),
  })
