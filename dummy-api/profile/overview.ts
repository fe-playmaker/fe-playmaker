import PlayerTshirtIcon from '@/icons/PlayerTShirtPngIcon.png'
import PlayerUpIcon from '@/icons/PlayerUpPngIcon.png'
import SecondLeagueIcon from '@/icons/SecondLeague.png'
import ThirdLeagueIcon from '@/icons/ThirdLeague.png'

import { IProfileCareerData } from './career'

export interface IProfileOverviewData {
  inShort: {
    data: {
      title: string
      icon: string
    }[]
  }
  experience: {
    data: {
      competetion: string
      competitionLogoUrl: string
      seasons: number
      matches: number
      goals: number
      avgGoals: number
      avgMinutes: number
    }[]
    total: {
      seasons: number
      matches: number
      goals: number
      avgGoals: number
      avgMinutes: number
    }
  }
  playerData: {
    altPosition: string
    position: string
    betterLeg: string
    height: number
    weight: number
    location: string
    age: number
  }
  carrer: IProfileCareerData[]
}

export const profileOverviewData: IProfileOverviewData = {
  inShort: {
    data: [
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
        icon: SecondLeagueIcon.src,
      },
      {
        title: '2 sezon w 4 lidze',
        icon: ThirdLeagueIcon.src,
      },
    ],
  },
  experience: {
    data: [
      {
        competetion: '3 liga',
        competitionLogoUrl:
          'https://s3-alpha-sig.figma.com/img/cc55/892a/e59c86e26eed16c28a9ce2f9c6d67dfc?Expires=1677456000&Signature=Yr6iZ-2qf3D9Oe9Hdo4Or8JqRw5ovK3~kWZQFwK4NQrYyFWOnj~mQyCqxUxdfTm1slgku~-hcAHptckEzSSKV4ddA~afXlrKqqTKLuMnMnGwBps8lNcHiErhnHwKhmwpTnWG6L74QmGKR1kip2pyLU63mlJnN7uRMDzfLfF6G4FpN7zvsY00x1eVSxAnFvVioCwv8Sm~kGYJF5OWqy0uiacyuTY8eYEzMAeLw1nfj9ebetFpzhGCvCswDP~n3WcdSMAIxLItMapFMeJaPtRNzUWxTidu1Z6sr3ZjhwCTXVCRdSDgkyWPvbVGp~OQUX8HxaIFNwOCx9K~jFd~jPvefg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        seasons: 2,
        matches: 29,
        goals: 14,
        avgGoals: 77,
        avgMinutes: 180,
      },
      {
        competetion: '4 liga',
        competitionLogoUrl:
          'https://s3-alpha-sig.figma.com/img/5649/71c9/14672293adf0b717df2848ce15db9aba?Expires=1677456000&Signature=F3vR1X9wAomo5SYn6bldl599HTFf57oHLZp-V2boTYUWP-1ycR8E496S2V-dPcnVOEgXDHRH7YZSsbKhJ3EAE~Ixfw4h0WVfaS78-4F0PiPkD4pFRR8EMJc~JAiVRBqRKeuG5VD0R656urbfspksbrcEUPgYkvsKZ2dZzB8lt1h64q1ZtE9F8CO430LEkLz76eFSVvnB06RZVCLdL1IQZp954PceYdm4tDsOzfG5JD8iC6bFg58~dfeAeaeoLlwHM8CjxPCQSM1pn4Mk-sB8nonKwAjsrT8aCZ4K2ca66Huqt1huPAsoI1p2xZ3HV4xpFT~EebaohrF3bYv-FTGyOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
    altPosition: 'Prawy pomocnik',
    position: 'Napastnik',
    betterLeg: 'Lewa',
    height: 182,
    weight: 78,
    location: 'Siedlce (mazowieckie)',
    age: 30,
  },
  // i created an array because in the season panel component you use an array so i need the same types
  carrer: [
    {
      season: '21/22',
      score: {
        value: 2.51,
        trend: 'up',
      },
      data: [
        {
          team: 'Pogoń Siedlce',
          teamLogoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
          teamLogoUrl:
            'https://s3-alpha-sig.figma.com/img/1451/3ccf/e4d75e1e62c47e7f5e9dd6d1b2abff44?Expires=1677456000&Signature=EOURPZ~JRZC3fqDWzOM0wUMUevvSukFDQV4-l3nwnrammLuxKLZncHbhGFgyCMmPswj~UB13P9bCtEtVfKWx~WSpyJ5OvwN4Kamglzi2SVdoJULxQkZ3rYUw8WgeWyZNeEPbHbBY4kVjuTA8EvT7~KHKEuutoZ3mFx1RnG9dbCK-VaVomfcYTE0DXXrIS5afC96n60CxbH~hPNMzgjAStodj0-4G8HmZ7Cnfj1czFkQsUnf4C5Oh4HEAzRBDSroVd9HjdLe6p-mh1u73JK1nhLDb9JhGFSTvJlXZYZ50Yy0Ip0Oy4Fnmk6gUK5vy-WKWKJDcdQYG5Vl55JRGq7Nd3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
          teamLogoUrl:
            'https://s3-alpha-sig.figma.com/img/63a1/b295/6a2d645ab1fca8ca5a0f14e35caa15a7?Expires=1677456000&Signature=fOKAC54REMNoii4nGOLK60zfig4Z302u0lhJ-XzX7RwLllqvW0znA4MAre~knNZqmSkYbjp0~E-3a3bc4LC5dmD6r0I3OGpBAx6PK9o4GnnafZjYemMHXYVQ7Snz4j-ndC5~ojjYQXQ6Xhr6SJCYybw0BsAfLKvjgT5LdRs2iOlGICfmVnRxT5-gfDGwKF2P9pGJaOganhGPI8LhpsRVDY~NNT0SMt0IoycQIMm3bimdDtc8wQ1GvdYG78QaAQtd3ElSI-OEXxDOyGlDNqu~d9Xl8pcun6l93Q3p6BkLCZM31vRGUqdOh0MjZ9gjOgkSHOufSqEHajgaDHyuZI2jtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
  ],
}
