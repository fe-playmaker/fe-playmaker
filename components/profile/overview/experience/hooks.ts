import { useQuery } from '@tanstack/react-query'
import { returnAfterTime } from 'dummy-api/helpers'
import { profileExperienceData } from 'dummy-api/profile/experience'

export const useProfileExperience = (id: string) =>
  useQuery({
    queryKey: ['profile-experience', id],
    queryFn: returnAfterTime(profileExperienceData, 200),
  })
