// api returns an array of objects described below
export interface IProfileCareerData {
  season: string
  score: {
    value: number
    trend: 'up' | 'down'
  }
  data: {
    team: string
    teamLogoUrl: string
    competition: string
    season?: 'Wiosna' | 'Lato' | 'Jesień' | 'Zima'
    mainTeam: boolean
    matches: number
    goals: number
    avgGoals: number
    avgMinutes: number
    totalMinutes: number
  }[]
  total: {
    matches: number
    goals: number
    avgGoals: number
    avgMinutes: number
    totalMinutes: number
  }
}

export const profileCareerData: IProfileCareerData[] = [
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
  {
    season: '20/21',
    score: {
      value: 1.28,
      trend: 'up',
    },
    data: [
      {
        team: 'Orlęta Radzyń Podlaski',
        teamLogoUrl:
          'https://s3-alpha-sig.figma.com/img/63a1/b295/6a2d645ab1fca8ca5a0f14e35caa15a7?Expires=1677456000&Signature=fOKAC54REMNoii4nGOLK60zfig4Z302u0lhJ-XzX7RwLllqvW0znA4MAre~knNZqmSkYbjp0~E-3a3bc4LC5dmD6r0I3OGpBAx6PK9o4GnnafZjYemMHXYVQ7Snz4j-ndC5~ojjYQXQ6Xhr6SJCYybw0BsAfLKvjgT5LdRs2iOlGICfmVnRxT5-gfDGwKF2P9pGJaOganhGPI8LhpsRVDY~NNT0SMt0IoycQIMm3bimdDtc8wQ1GvdYG78QaAQtd3ElSI-OEXxDOyGlDNqu~d9Xl8pcun6l93Q3p6BkLCZM31vRGUqdOh0MjZ9gjOgkSHOufSqEHajgaDHyuZI2jtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
    season: '20/21',
    score: {
      value: 0.92,
      trend: 'down',
    },
    data: [
      {
        team: 'Unia Tarnów',
        teamLogoUrl:
          'https://s3-alpha-sig.figma.com/img/a436/6c36/f34b5fc4c91eed8430de9a23168769f0?Expires=1677456000&Signature=ooIT-uCOMU1Uhetn~7QYgFfJf33ia584j9DAkFWD0Vk1QTuVWHz8V~axwJqZ903g-KWKFoqhjm3SPgnwpZir9myHaqqxHH0X-ThYezK1FTuvC6OERCvwrQQkjDVRELOaSrZN~J~~r9LutJg4ftFjhEraGTaz11D-YRFwLA4s6DzQ53QjTop6SGyiGSkJLZATiLVa8yHCmB8WNNwsjef1xZPoMH-1CLtdXLNUdXPyqs4GaYZ4aS~izJe0PEaAppN~RDY5YTHJQ8gswFmpTsOBkUSc5HYPRayw~UZLZEPVifMfUJguT1yrbVNWUuPLzq~rx~NuK2r7neBIAGIIbmIqrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
