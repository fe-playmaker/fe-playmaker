import LogoOlimpia from 'img/mock/team-olimpia.png'
import LogoOrleta from 'img/mock/team-orleta.png'
import LogoPogon from 'img/mock/team-pogon.png'
import LogoUnia from 'img/mock/team-unia.png'
import { TProfileCareer } from 'types/profile'

export const profileCareerData: TProfileCareer[] = [
  {
    season: '21/22',
    score: {
      value: 2.51,
      trend: 'up',
    },
    data: [
      {
        team: 'Pogoń Siedlce',
        teamLogoUrl: LogoPogon.src,
        competition: '3 liga',
        season: 'Wiosna',
        mainTeam: true,
        matches: 9,
        goals: 6,
        avgGoals: 0.7,
        avgMinutes: 77,
        totalMinutes: 180,
      },
      {
        team: 'Olimpia Elbląg',
        teamLogoUrl: LogoOlimpia.src,
        competition: '3 liga',
        season: 'Wiosna',
        mainTeam: false,
        matches: 12,
        goals: 5,
        avgGoals: 0.4,
        avgMinutes: 77,
        totalMinutes: 180,
      },
      {
        team: 'Orlęta Radzyń Podlaski',
        teamLogoUrl: LogoOrleta.src,
        competition: '4 liga',
        season: 'Jesień',
        mainTeam: false,
        matches: 19,
        goals: 11,
        avgGoals: 0.6,
        avgMinutes: 65,
        totalMinutes: 340,
      },
    ],
    total: {
      matches: 30,
      goals: 33,
      avgGoals: 0.6,
      avgMinutes: 60,
      totalMinutes: 310,
    },
  },
  {
    season: '20/21',
    score: {
      value: 1.28,
      trend: 'up',
    },
    data: [
      {
        team: 'Orlęta Radzyń Podlaski',
        teamLogoUrl: LogoOrleta.src,
        competition: '4 liga',
        mainTeam: false,
        matches: 27,
        goals: 19,
        avgGoals: 0.6,
        avgMinutes: 65,
        totalMinutes: 340,
      },
    ],
    total: {
      matches: 27,
      goals: 19,
      avgGoals: 0.6,
      avgMinutes: 65,
      totalMinutes: 340,
    },
  },
  {
    season: '19/20',
    score: {
      value: 0.92,
      trend: 'down',
    },
    data: [
      {
        team: 'Unia Tarnów',
        teamLogoUrl: LogoUnia.src,
        competition: '4 liga',
        mainTeam: false,
        matches: 16,
        goals: 8,
        avgGoals: 0.5,
        avgMinutes: 65,
        totalMinutes: 340,
      },
    ],
    total: {
      matches: 16,
      goals: 8,
      avgGoals: 0.5,
      avgMinutes: 65,
      totalMinutes: 340,
    },
  },
]
