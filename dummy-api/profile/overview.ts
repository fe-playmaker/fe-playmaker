import Liga2 from 'img/mock/2liga.png'
import Liga3 from 'img/mock/3liga.png'
import Avatar1 from 'img/mock/avatar-1.png'
import Avatar2 from 'img/mock/avatar-2.png'
import Avatar3 from 'img/mock/avatar-3.png'
import PlayerTshirtIcon from 'img/mock/player-up-shirt.png'
import LogoOlimpia from 'img/mock/team-olimpia.png'
import LogoOrleta from 'img/mock/team-orleta.png'
import LogoPogon from 'img/mock/team-pogon.png'
import LogoUnia from 'img/mock/team-unia.png'
import PlayerUpIcon from 'img/mock/up-icon.png'
import {
  TProfileOverview,
  TProfileOverviewLastMatches,
  TProfileOverviewPMScore,
  TProfileOverviewRegularity,
} from 'types/profile'
import { v4 as uuid } from 'uuid'

import { profileCareerData } from './career'
import { profileMatchesData } from './matches'

export const profileOverviewData: TProfileOverview = {
  inShort: [
    {
      title: 'Dobra forma',
      icon: PlayerUpIcon.src,
    },
    {
      title: 'Kluczowy zawodnik w Pogoni Siedlce',
      icon: PlayerTshirtIcon.src,
    },
    {
      title: '1 sezon w 3 lidze',
      icon: Liga2.src,
    },
    {
      title: '2 sezon w 4 lidze',
      icon: Liga3.src,
    },
  ],
  transfers: [
    {
      id: uuid(),
      from: {
        logoUrl: LogoOrleta.src,
        name: 'Orlęta Radzyń Podlaski',
      },
      to: {
        logoUrl: LogoPogon.src,
        name: 'Pogoń Siedlce',
      },
      type: 'Transfer',
      date: '26 January 2022',
    },
    {
      id: uuid(),
      from: {
        logoUrl: LogoOrleta.src,
        name: 'Orlęta Radzyń Podlaski',
      },
      to: {
        logoUrl: LogoOlimpia.src,
        name: 'Olimpia Elbląg',
      },
      type: 'Wypożyczenie',
      date: '20 September 2021',
    },
    {
      id: uuid(),
      from: {
        logoUrl: LogoUnia.src,
        name: 'Unia Tarnów',
      },
      to: {
        logoUrl: LogoOrleta.src,
        name: 'Orlęta Radzyń Podlaski',
      },
      type: 'Transfer',
      date: '14 June 2020',
    },
    {
      id: uuid(),
      from: {
        logoUrl: LogoOrleta.src,
        name: 'Orlęta Radzyń Podlaski',
      },
      to: {
        logoUrl: LogoPogon.src,
        name: 'Pogoń Siedlce',
      },
      type: 'Transfer',
      date: '26 January 2022',
    },
    {
      id: uuid(),
      from: {
        logoUrl: LogoOrleta.src,
        name: 'Orlęta Radzyń Podlaski',
      },
      to: {
        logoUrl: LogoOlimpia.src,
        name: 'Olimpia Elbląg',
      },
      type: 'Wypożyczenie',
      date: '20 September 2021',
    },
    {
      id: uuid(),
      from: {
        logoUrl: LogoUnia.src,
        name: 'Unia Tarnów',
      },
      to: {
        logoUrl: LogoOrleta.src,
        name: 'Orlęta Radzyń Podlaski',
      },
      type: 'Transfer',
      date: '14 June 2020',
    },
    {
      id: uuid(),
      from: {
        logoUrl: LogoUnia.src,
        name: 'Unia Tarnów',
      },
      to: {
        logoUrl: LogoOrleta.src,
        name: 'Orlęta Radzyń Podlaski',
      },
      type: 'Transfer',
      date: '14 June 2020',
    },
  ],
  similarPlayers: [
    {
      id: uuid(),
      name: 'Sebastian Bergier',
      avatarUrl: Avatar1.src,
      score: {
        value: 71,
        trend: 'up',
      },
      premium: false,
      age: 22,
      competition: '3 liga',
      team: 'Śląsk Wrocław II',
      position: 'Napastnik',
    },
    {
      id: uuid(),
      name: 'Krzysztof Świątek',
      avatarUrl: Avatar2.src,
      score: {
        value: 63,
        trend: 'down',
      },
      premium: true,
      age: 35,
      competition: '3 liga',
      team: 'Hutnik Kraków',
      position: 'Ofensywny pomocnik',
    },
    {
      id: uuid(),
      name: 'Paweł Mróz',
      avatarUrl: Avatar3.src,
      score: {
        value: 45,
        trend: 'up',
      },
      premium: false,
      age: 23,
      competition: '3 liga',
      team: 'Siarka Tarnobrzeg',
      position: 'Środkowy napastnik',
    },
    {
      id: uuid(),
      name: 'Sebastian Bergier',
      avatarUrl: Avatar1.src,
      score: {
        value: 71,
        trend: 'up',
      },
      premium: false,
      age: 22,
      competition: '3 liga',
      team: 'Śląsk Wrocław II',
      position: 'Napastnik',
    },
    {
      id: uuid(),
      name: 'Krzysztof Świątek',
      avatarUrl: Avatar2.src,
      score: {
        value: 63,
        trend: 'down',
      },
      premium: true,
      age: 35,
      competition: '3 liga',
      team: 'Hutnik Kraków',
      position: 'Ofensywny pomocnik',
    },
    {
      id: uuid(),
      name: 'Paweł Mróz',
      avatarUrl: Avatar2.src,
      score: {
        value: 45,
        trend: 'up',
      },
      premium: false,
      age: 23,
      competition: '3 liga',
      team: 'Siarka Tarnobrzeg',
      position: 'Środkowy napastnik',
    },
    {
      id: uuid(),
      name: 'Sebastian Bergier',
      avatarUrl: Avatar3.src,
      score: {
        value: 71,
        trend: 'up',
      },
      premium: false,
      age: 22,
      competition: '3 liga',
      team: 'Śląsk Wrocław II',
      position: 'Napastnik',
    },
  ],
  experience: {
    data: [
      {
        competetion: '3 liga',
        competitionLogoUrl: Liga2.src,
        seasons: 2,
        matches: 29,
        goals: 14,
        avgGoals: 77,
        avgMinutes: 180,
      },
      {
        competetion: '4 liga',
        competitionLogoUrl: Liga3.src,
        seasons: 3,
        matches: 51,
        goals: 32,
        avgGoals: 65,
        avgMinutes: 340,
      },
    ],
    total: {
      seasons: 5,
      matches: 80,
      goals: 46,
      avgGoals: 60,
      avgMinutes: 310,
    },
  },
  playerData: {
    team: {
      id: 'pgsiedlce',
      name: 'Pogoń Siedlce',
      competition: '3 liga',
    },
    altPosition: 'Prawy pomocnik',
    position: 'Napastnik',
    betterLeg: 'Lewa',
    height: 182,
    weight: 78,
    location: 'Siedlce (mazowieckie)',
    age: 30,
    firstName: 'Cezary',
    lastName: 'Obama',
    videoUrl: '',
  },
  career: profileCareerData[0],
}

export const profileOverviewRegularityData: TProfileOverviewRegularity = {
  additional: {
    type: 'key',
    teamLogoUrl: LogoPogon.src,
  },
  totalParticipationPercentage: 60,
  ofMatches: 10,
  firstEleven: 4,
  fromBench: 2,
  bench: 0,
  outsideCadre: 4,
}

export const profileOverviewLastMatchesData: TProfileOverviewLastMatches = {
  additional: {
    type: 'standedOut',
  },
  data: profileMatchesData[0],
}

export const profileOverviewPMScoreData: TProfileOverviewPMScore = {
  lastScore: {
    value: 0.72,
    trend: 'up',
    ofLastMatches: 5,
  },
  score: 63,
  scoreGraph: 'unknown',
}
