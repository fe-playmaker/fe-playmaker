import { useQuery } from '@tanstack/react-query'
import { profileCareerData } from 'dummy-api/profile/career'
import { returnAfterTime } from 'utils/return-after-time'

export const useProfileCareer = (id: string) =>
  useQuery({
    queryKey: ['profile-career', id],
    queryFn: returnAfterTime(profileCareerData, 700),
  })
