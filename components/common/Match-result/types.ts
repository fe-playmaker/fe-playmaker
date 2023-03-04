// subject to change when dummy data is created
export interface IMatchResult {
  actualTeam: {
    name: string
    logo: string
    goals: number
    playerPlayed?: boolean
  }
  oposingTeam: {
    name: string
    logo: string
    goals: number
    playerPlayed?: boolean
  }
  status: 'win' | 'draw' | 'loss'
  date: string
  playerStats?: {
    minutes: number
    goals: number
    clearAccount: boolean
    score: {
      value: number
      trend: 'up' | 'down'
    }
    redCards: number
    yellowCards: number
  }
  video?: string
  noParticipation?: boolean
}
