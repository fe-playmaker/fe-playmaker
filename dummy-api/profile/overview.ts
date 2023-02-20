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
  transfers: {
    data: {
      id: number
      from: {
        logo: string
        name: string
      }
      to: {
        logo: string
        name: string
      }
      type: string
    }[]
  }
  similarPlayers: {
    data: {
      name: string
      image: string
      score: number
      premium: boolean
      carrer: string
      age: number
      trend: 'up' | 'down'
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
  transfers: {
    data: [
      {
        id: 1,
        from: {
          logo: 'https://s3-alpha-sig.figma.com/img/63a1/b295/6a2d645ab1fca8ca5a0f14e35caa15a7?Expires=1677456000&Signature=fOKAC54REMNoii4nGOLK60zfig4Z302u0lhJ-XzX7RwLllqvW0znA4MAre~knNZqmSkYbjp0~E-3a3bc4LC5dmD6r0I3OGpBAx6PK9o4GnnafZjYemMHXYVQ7Snz4j-ndC5~ojjYQXQ6Xhr6SJCYybw0BsAfLKvjgT5LdRs2iOlGICfmVnRxT5-gfDGwKF2P9pGJaOganhGPI8LhpsRVDY~NNT0SMt0IoycQIMm3bimdDtc8wQ1GvdYG78QaAQtd3ElSI-OEXxDOyGlDNqu~d9Xl8pcun6l93Q3p6BkLCZM31vRGUqdOh0MjZ9gjOgkSHOufSqEHajgaDHyuZI2jtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Orlęta Radzyń Podlaski',
        },
        to: {
          logo: 'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Pogoń Siedlce',
        },
        type: 'Transfer (26.01.2022)',
      },
      {
        id: 2,
        from: {
          logo: 'https://s3-alpha-sig.figma.com/img/63a1/b295/6a2d645ab1fca8ca5a0f14e35caa15a7?Expires=1677456000&Signature=fOKAC54REMNoii4nGOLK60zfig4Z302u0lhJ-XzX7RwLllqvW0znA4MAre~knNZqmSkYbjp0~E-3a3bc4LC5dmD6r0I3OGpBAx6PK9o4GnnafZjYemMHXYVQ7Snz4j-ndC5~ojjYQXQ6Xhr6SJCYybw0BsAfLKvjgT5LdRs2iOlGICfmVnRxT5-gfDGwKF2P9pGJaOganhGPI8LhpsRVDY~NNT0SMt0IoycQIMm3bimdDtc8wQ1GvdYG78QaAQtd3ElSI-OEXxDOyGlDNqu~d9Xl8pcun6l93Q3p6BkLCZM31vRGUqdOh0MjZ9gjOgkSHOufSqEHajgaDHyuZI2jtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Orlęta Radzyń Podlaski',
        },
        to: {
          logo: 'https://s3-alpha-sig.figma.com/img/1451/3ccf/e4d75e1e62c47e7f5e9dd6d1b2abff44?Expires=1677456000&Signature=EOURPZ~JRZC3fqDWzOM0wUMUevvSukFDQV4-l3nwnrammLuxKLZncHbhGFgyCMmPswj~UB13P9bCtEtVfKWx~WSpyJ5OvwN4Kamglzi2SVdoJULxQkZ3rYUw8WgeWyZNeEPbHbBY4kVjuTA8EvT7~KHKEuutoZ3mFx1RnG9dbCK-VaVomfcYTE0DXXrIS5afC96n60CxbH~hPNMzgjAStodj0-4G8HmZ7Cnfj1czFkQsUnf4C5Oh4HEAzRBDSroVd9HjdLe6p-mh1u73JK1nhLDb9JhGFSTvJlXZYZ50Yy0Ip0Oy4Fnmk6gUK5vy-WKWKJDcdQYG5Vl55JRGq7Nd3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Olimpia Elbląg',
        },
        type: 'Wypożyczenie (20.09.2021)',
      },
      {
        id: 3,
        from: {
          logo: 'https://s3-alpha-sig.figma.com/img/a436/6c36/f34b5fc4c91eed8430de9a23168769f0?Expires=1677456000&Signature=ooIT-uCOMU1Uhetn~7QYgFfJf33ia584j9DAkFWD0Vk1QTuVWHz8V~axwJqZ903g-KWKFoqhjm3SPgnwpZir9myHaqqxHH0X-ThYezK1FTuvC6OERCvwrQQkjDVRELOaSrZN~J~~r9LutJg4ftFjhEraGTaz11D-YRFwLA4s6DzQ53QjTop6SGyiGSkJLZATiLVa8yHCmB8WNNwsjef1xZPoMH-1CLtdXLNUdXPyqs4GaYZ4aS~izJe0PEaAppN~RDY5YTHJQ8gswFmpTsOBkUSc5HYPRayw~UZLZEPVifMfUJguT1yrbVNWUuPLzq~rx~NuK2r7neBIAGIIbmIqrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Unia Tarnów',
        },
        to: {
          logo: 'https://s3-alpha-sig.figma.com/img/63a1/b295/6a2d645ab1fca8ca5a0f14e35caa15a7?Expires=1677456000&Signature=fOKAC54REMNoii4nGOLK60zfig4Z302u0lhJ-XzX7RwLllqvW0znA4MAre~knNZqmSkYbjp0~E-3a3bc4LC5dmD6r0I3OGpBAx6PK9o4GnnafZjYemMHXYVQ7Snz4j-ndC5~ojjYQXQ6Xhr6SJCYybw0BsAfLKvjgT5LdRs2iOlGICfmVnRxT5-gfDGwKF2P9pGJaOganhGPI8LhpsRVDY~NNT0SMt0IoycQIMm3bimdDtc8wQ1GvdYG78QaAQtd3ElSI-OEXxDOyGlDNqu~d9Xl8pcun6l93Q3p6BkLCZM31vRGUqdOh0MjZ9gjOgkSHOufSqEHajgaDHyuZI2jtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          name: 'Orlęta Radzyń Podlaski',
        },
        type: 'Transfer (14.06.2020)',
      },
    ],
  },
  similarPlayers: {
    data: [
      {
        name: 'Sebastian Bergier',
        image:
          'https://s3-alpha-sig.figma.com/img/943e/ab5d/c673dd06d517cfde44396008f0a7c7bd?Expires=1678060800&Signature=nrLtrZvheuV6c~xPlBQpLudJh1mQVkDzrKTgEN-nk7jvou9NlvxJKyFb8444pCNqbqAL71u31j5EbvU~gRHs~pAI8W9nMZFcoNKjgLma19pYS9HdwXh5oGhr9QwRJ1vqvdwi1AoLbk047JUYCoKdOWgDTIcS7InJ6xxW4Ff~AH8h9s8bGiI4m7FY-dhGFoncz6F7ThvECr-B1Q5uG9RvrjMxUZniB4vxANZCGIPCW2nczuQooEzgMgj5UM6D9pSo04Gtyev7y2rCPLKf8y7cJmRQVhwEGT0jzcDx6VVFirzIcm4p44jykW8PfQS2XOMJr8kEXXhdP5ksUBAsmUfKlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        score: 71,
        premium: false,
        carrer: 'Napastnik w Śląsk Wrocław II (3 liga)',
        age: 22,
        trend: 'up',
      },
      {
        name: 'Krzysztof Świątek',
        image:
          'https://s3-alpha-sig.figma.com/img/91ae/637a/81fd2f798585938127220e6fe8b7043f?Expires=1678060800&Signature=qp3BR7t4OLX7bqqpBvFg3L2obb9pORHboMxXMxHSM4YK2cYR-a7FjX39zxVriV6Ldr8n3up7diF-0g16kRYXKDdfdasgKeSGHLXUDqVqUAXyinS8FZuj17Rb7jVTYtjZWw0FQEZe-oUkbSjxVeGaN6cFa-3cA2rCO2fv~HHRo9qvCI0SuuvJJHGI~t5ALY5iv3bCAjZ0ur8GH1jtwV2FhU9uLnI2-dn~JWMRh7RYp9Bhs29aW08WwhFfDMdYfwYWkw5cnuQ51ehP9ijWkTp2n7a6cSpUceB0saeHOqjBeQEUJXZUmEiVFuZl4ONKTvNVxtRYJfpKbseAtvtxVn~kwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        score: 63,
        premium: true,
        carrer: 'Ofensywny pomocnik w Hutnik Kraków (3 liga)',
        age: 35,
        trend: 'down',
      },
      {
        name: 'Paweł Mróz',
        image:
          'https://s3-alpha-sig.figma.com/img/a4c1/ed43/999b08b377dfe43d111f3b48046f7b20?Expires=1678060800&Signature=KAH4hCRfz0PGvAMy4Jy8-kh0QeAVdsfgSz5SuDmwZYHK7D5roG-xG~G7jRDnvzFmOlcbFnBDKlNWj0q39Bnva4BSs9Q9cqgNgBKcBO1tmrZ~P0Af03OgXzvPwfqgJeWv2Ds6z6AgcYeRwOzOUeXUxZTU8SK9grgqcB5mLa6CfGeDp3eZ05JaxViA9n9EgHN3G~9PeJCxPFPtSWshNb3GVjm6edft2mtbgfyrN5SOED-WNXTavg3-wCC9qZjWuCyle-OCooWxznMw6uiZkWw1kedxOHvmpzxYZalnTpddIxdF3ZIuFNOCuFD7SsTRfZyplzt6zYDQClwfWMpbOVTrVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        score: 45,
        premium: false,
        carrer: 'Środkowy napastnik w Siarka Tarnobrzeg (3 liga)',
        age: 23,
        trend: 'up',
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
