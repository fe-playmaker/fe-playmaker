import { API, PARAMS } from './types'

export type TSeasonsList = API['CommonListItem']
export type TSeasonsListParams = PARAMS<'SeasonsList'>

export type TCompetitionLevelsList = API['CommonListItem']
export type TCompetitionLevelsListParams = PARAMS<'CompetitionLevelsList'>

export type TTeamsList = API['TeamsListItem']
export type TTeamsListParams = PARAMS<'TeamsList'>
