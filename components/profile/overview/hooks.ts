import { useQuery } from '@tanstack/react-query'
import {
  profileOverviewData,
  profileOverviewLastMatchesData,
  profileOverviewPMScoreData,
  profileOverviewRegularityData,
} from 'dummy-api/profile/overview'
import {
  TProfileOverviewLastMatchesParams,
  TProfileOverviewPMScoreParams,
  TProfileOverviewRegularityParams,
} from 'types/profile'
import { returnAfterTime } from 'utils/return-after-time'

export const useProfileOverview = (id: string) =>
  useQuery({
    queryKey: ['profile-overview', id],
    queryFn: returnAfterTime(profileOverviewData, 200),
  })

export const useProfileOverviewLastMatches = (
  id: string,
  filters?: TProfileOverviewLastMatchesParams,
) =>
  useQuery({
    queryKey: [
      'profile-overview',
      'last-matches',
      id,
      filters ? { ...filters } : 'main',
    ],
    queryFn: returnAfterTime(profileOverviewLastMatchesData, 200),
  })

export const useProfileOverviewRegularity = (
  id: string,
  filters?: TProfileOverviewRegularityParams,
) =>
  useQuery({
    queryKey: [
      'profile-overview',
      'regularity',
      id,
      filters ? { ...filters } : 'main',
    ],
    queryFn: returnAfterTime(profileOverviewRegularityData, 200),
  })

export const useProfileOverviewPMScore = (
  id: string,
  filters?: TProfileOverviewPMScoreParams,
) =>
  useQuery({
    queryKey: [
      'profile-overview',
      'pm-score',
      id,
      filters ? { ...filters } : 'main',
    ],
    queryFn: returnAfterTime(profileOverviewPMScoreData, 200),
  })
