import { useQuery } from '@tanstack/react-query'
import { returnAfterTime } from 'dummy-api/helpers'
import { profileCareerData } from 'dummy-api/profile/career'

export const useProfileCareer = (id: string) =>
  useQuery({
    queryKey: ['profile-career', id],
    queryFn: returnAfterTime(profileCareerData, 700),
  })
