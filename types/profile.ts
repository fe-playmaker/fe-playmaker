import { API, PARAMS } from './types'

export type TProfileHeader = API['ProfileHeader']
export type TProfileCareer = API['ProfileCareer']
export type TProfileMatches = API['ProfileMatches']
export type TProfilePMScore = API['ProfilePMScore']

export type TProfileOverview = API['ProfileOverview']

export type TProfileOverviewLastMatches = API['ProfileOverviewLastMatches']
export type TProfileOverviewLastMatchesParams =
  PARAMS<'PlayerProfileOverviewLastMatches'>

export type TProfileOverviewRegularity = API['ProfileOverviewRegularity']
export type TProfileOverviewRegularityParams =
  PARAMS<'PlayerProfileOverviewRegularity'>

export type TProfileOverviewPMScore = API['ProfileOverviewPMScore']
export type TProfileOverviewPMScoreParams =
  PARAMS<'PlayerProfileOverviewPMScore'>
