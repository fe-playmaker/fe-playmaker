// api returns array of object described below
export interface IProfileMatchesSeason {
  season: string
  matches: {
    homeTeam: {
      logoUrl: string
      name: string
      score: number
      mainTeam: boolean
    }
    awayTeam: {
      logoUrl: string
      name: string
      score: number
      mainTeam: boolean
    }
    wideo?: string
    // iso string
    date: string
    competition: string
    status: 'win' | 'loss' | 'draw'
    minutes: number
    goals?: number
    clearAccounts?: number
    score?: {
      value: number
      trend: 'up' | 'down'
    }
    yellowCards: number
    redCards: number
    additional?: string
  }[]
  total: {
    minutes: number
    goals?: number
    clearAccounts?: number
    score: {
      value: number
      trend: 'up' | 'down'
    }
    yellowCards: number
    redCards: number
  }
  avgMatch: {
    minutes: number
    goals?: number
    clearAccounts?: number
    score: {
      value: number
      trend: 'up' | 'down'
    }
    yellowCards: number
    redCards: number
  }
}

export const profileMatchesData: IProfileMatchesSeason[] = [
  {
    season: 'Wiosna 21/22',
    matches: [
      {
        homeTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 3,
        },
        awayTeam: {
          name: 'Siarka Tarnobrzegffdfdsfsdfds',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/b14f/6276/d48082e66505edcfc32fccd365aed5af?Expires=1677456000&Signature=aCoyhIxwWAX5DbTZxVjvwVWa9-mmM7yYcS5dMBJv~8cVvXyy9yBOKorFn4Dv0HveEOXtMpifN4aFq27r8CKImuIFgab8P-nk8BIq5HZHiI2K-174rOhdmIFo8YgFFRlV91Jzquyl5sYaZwVaATBjCO0MRQXTxI0sU1LVVEMJR8QRuFvzovSFtTBsDbuphMIrxJlcziXhDMeO~EtQ1UgAYZqxWtmCQQhtBT2o9GvxVImjAQYmsjBJCiK~qIZCXCSOZVRvQ~avWtUgmrWDfzCHWk3utHv4lG8yyuAfy~wgaszfwqbg4Crs8fPtB8-nMd-pNbGRxCm6IyA~UGIr9~Zk8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 1,
        },
        competition: '3 liga',
        wideo: 'fdfssfds',
        date: new Date('2022-02-22').toISOString(),
        status: 'win',
        minutes: 90,
        goals: 2,
        score: {
          value: 0.72,
          trend: 'up',
        },
        yellowCards: 0,
        redCards: 0,
        additional: 'Pierwszy skład',
      },
      {
        homeTeam: {
          name: 'Znicz Pruszków',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/78dd/f8dd/f45d6e843bf16db87eb05b5ffb980966?Expires=1677456000&Signature=bq58ie4GTh3S6bPW3X2BWHfWJfRamz8K4UaqrAG9uQOeFfG0WpBzC7q1bza~5iFlc7nwBp3ABWOU6URHzcz0M3n5siaBBqmwdTCujTYoU2dGGqmuiNCAc0fzb9Ul8HaqZS-02ZdRijD0DT5bdByU6K5HYDIRfaQ-UgLF-h-uYU0O4-JULY9jvzgNVNG5LUWdLRKvtnhipkZW3atrENwo8Jjqjj0vk8OTz0eCeFD6BBxi~tVAcA9wjzRS7H-stwTHhU2Cj~2DWZdimzFkh~4uO4IZ2KSbELwqKfK5QjZLYFXFksZ2L4jkVd6mCMAoTyi-yn-lOHrw5PnyvPaYdZeJFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 0,
        },
        awayTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 0,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'draw',
        minutes: 48,
        goals: 1,
        score: {
          value: 0.18,
          trend: 'down',
        },
        yellowCards: 0,
        redCards: 0,
        additional: 'Z ławki',
      },
      {
        homeTeam: {
          name: 'Wisła Puławy',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/a4d4/26f0/a6065ee10ecfb166b8100948ceafe4c0?Expires=1677456000&Signature=HFzygFuKuYP7KHr6-26wg6SA82TnoWo2W3dIuA9HASpB95Ns3VqOe-CsO~C3lfnrlqEazo3g1-0a6g2Z1pzIwBkwYbMC11HCXnwuFt3hTlvAQ6ta-91J1LNz5WPPDxohR5KgG~wSq3JKWVyYV5Qt0BZJ65grPg4TGMYmX81DmM0kjV4bvaLIjUyh4A3nhfQw01tIS7c0ULokg75C1BKR9ANC5ZK-y6NBcmhmbsicjzmW-F9OmTtI9fYOJAXMkjOAU2on~k6-7B5BeiI4D7KX3LcYvPw0LczU4fhcUl4c3fD7Ipb0A4qT5FQmmuIkSqcgA97MrOM7BaX-zXeT3-tizA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 4,
        },
        awayTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 3,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'loss',
        minutes: 0,
        goals: 0,
        yellowCards: 0,
        redCards: 0,
        additional: 'Ławka',
      },
      {
        homeTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 1,
        },
        awayTeam: {
          name: 'Śląsk Wrocław II',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/795f/f09b/f0e95e2bb608771678fe65847fd18be0?Expires=1677456000&Signature=atMjG7VYVnFD0uE0pqcAQWoNnESu9CDt2GC1iPAmOKYEbqnZ575YBSdQiv9el0uB5F8YmD8oXfINVYUXsMClB2hdvBLPOf1-bHFr5c8WOQnoxqliNorGHqdibWjbEw2x7QTDtwbwykQBVCBNnyDqVqW4nJm-IfWKHlqFHgEzNSm3I89-zaAJi2dl2vaPs9ee6Fxch2zO~wTnZDAdQqTkdfgeZkKuAXR4VhviMBWfzbJoYozKKZLpdEX2-mLrEKvyN6tWflEG5QnHMyShDxU3~f3A4p6w3oDBSLGS1dHeBYeY32CnmnpOuV6wb9hWuVixTzANOn6H1q1qmuRAhWJa-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 0,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'win',
        minutes: 90,
        goals: 1,
        score: {
          value: 1.26,
          trend: 'up',
        },
        yellowCards: 1,
        redCards: 0,
        additional: 'Pierwszy skład',
      },
      {
        homeTeam: {
          name: 'Górnik Polkowice',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/a757/3079/496e649ac952b3fbbb6b29bebfe3a1c1?Expires=1677456000&Signature=KoB-kXKkfVU3zeUzMSXp3pN79zhRp82rmH16Dhif3IYzbcg0yuA7ltPQTyECL3AlqATVbJNf-h7iRnP3H6zf6IlzRSaJZUZGdtaVd6wjDIvO5rQcDmN5Zl9TwydHM1Z3oXMQWjg1uWIDaOEBYGJJfvEXaDy4amvs20QYq4Qjku~02irI1djJX5tVcQaQTlFOJvX94nkNTWQ3Cls2q7jOapzYlBHMw8b8ZA8dcS925RiGouOpilGAem1bmzIMmO2ZRoaw-dr~8izh2hJlUwJxRDbOVWkvsri0jj9IRZS~iSZn8ZecQG2Mqyu1FsDXdj0xF4gFIjdN~0cJleexNQm5-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 2,
        },
        awayTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 2,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'draw',
        minutes: 61,
        goals: 0,
        score: {
          value: 0.42,
          trend: 'down',
        },
        yellowCards: 0,
        redCards: 1,
        additional: 'Z ławki',
      },
    ],
    total: {
      minutes: 271,
      goals: 4,
      score: {
        value: 0.85,
        trend: 'up',
      },
      yellowCards: 1,
      redCards: 1,
    },
    avgMatch: {
      minutes: 94,
      goals: 0.8,
      score: {
        value: 0.27,
        trend: 'up',
      },
      yellowCards: 0.2,
      redCards: 0.2,
    },
  },
  {
    season: 'Jesień 21/22',
    matches: [
      {
        homeTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 3,
        },
        awayTeam: {
          name: 'Siarka Tarnobrzegffdfdsfsdfds',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/b14f/6276/d48082e66505edcfc32fccd365aed5af?Expires=1677456000&Signature=aCoyhIxwWAX5DbTZxVjvwVWa9-mmM7yYcS5dMBJv~8cVvXyy9yBOKorFn4Dv0HveEOXtMpifN4aFq27r8CKImuIFgab8P-nk8BIq5HZHiI2K-174rOhdmIFo8YgFFRlV91Jzquyl5sYaZwVaATBjCO0MRQXTxI0sU1LVVEMJR8QRuFvzovSFtTBsDbuphMIrxJlcziXhDMeO~EtQ1UgAYZqxWtmCQQhtBT2o9GvxVImjAQYmsjBJCiK~qIZCXCSOZVRvQ~avWtUgmrWDfzCHWk3utHv4lG8yyuAfy~wgaszfwqbg4Crs8fPtB8-nMd-pNbGRxCm6IyA~UGIr9~Zk8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 1,
        },
        competition: '3 liga',
        wideo: 'fdfssfds',
        date: new Date('2022-02-22').toISOString(),
        status: 'win',
        minutes: 90,
        goals: 2,
        score: {
          value: 0.72,
          trend: 'up',
        },
        yellowCards: 0,
        redCards: 0,
        additional: 'Pierwszy skład',
      },
      {
        homeTeam: {
          name: 'Znicz Pruszków',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/78dd/f8dd/f45d6e843bf16db87eb05b5ffb980966?Expires=1677456000&Signature=bq58ie4GTh3S6bPW3X2BWHfWJfRamz8K4UaqrAG9uQOeFfG0WpBzC7q1bza~5iFlc7nwBp3ABWOU6URHzcz0M3n5siaBBqmwdTCujTYoU2dGGqmuiNCAc0fzb9Ul8HaqZS-02ZdRijD0DT5bdByU6K5HYDIRfaQ-UgLF-h-uYU0O4-JULY9jvzgNVNG5LUWdLRKvtnhipkZW3atrENwo8Jjqjj0vk8OTz0eCeFD6BBxi~tVAcA9wjzRS7H-stwTHhU2Cj~2DWZdimzFkh~4uO4IZ2KSbELwqKfK5QjZLYFXFksZ2L4jkVd6mCMAoTyi-yn-lOHrw5PnyvPaYdZeJFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 0,
        },
        awayTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 0,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'draw',
        minutes: 48,
        goals: 1,
        score: {
          value: 0.18,
          trend: 'down',
        },
        yellowCards: 0,
        redCards: 0,
        additional: 'Z ławki',
      },
      {
        homeTeam: {
          name: 'Wisła Puławy',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/a4d4/26f0/a6065ee10ecfb166b8100948ceafe4c0?Expires=1677456000&Signature=HFzygFuKuYP7KHr6-26wg6SA82TnoWo2W3dIuA9HASpB95Ns3VqOe-CsO~C3lfnrlqEazo3g1-0a6g2Z1pzIwBkwYbMC11HCXnwuFt3hTlvAQ6ta-91J1LNz5WPPDxohR5KgG~wSq3JKWVyYV5Qt0BZJ65grPg4TGMYmX81DmM0kjV4bvaLIjUyh4A3nhfQw01tIS7c0ULokg75C1BKR9ANC5ZK-y6NBcmhmbsicjzmW-F9OmTtI9fYOJAXMkjOAU2on~k6-7B5BeiI4D7KX3LcYvPw0LczU4fhcUl4c3fD7Ipb0A4qT5FQmmuIkSqcgA97MrOM7BaX-zXeT3-tizA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 4,
        },
        awayTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 3,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'loss',
        minutes: 0,
        goals: 0,
        yellowCards: 0,
        redCards: 0,
        additional: 'Ławka',
      },
      {
        homeTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 1,
        },
        awayTeam: {
          name: 'Śląsk Wrocław II',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/795f/f09b/f0e95e2bb608771678fe65847fd18be0?Expires=1677456000&Signature=atMjG7VYVnFD0uE0pqcAQWoNnESu9CDt2GC1iPAmOKYEbqnZ575YBSdQiv9el0uB5F8YmD8oXfINVYUXsMClB2hdvBLPOf1-bHFr5c8WOQnoxqliNorGHqdibWjbEw2x7QTDtwbwykQBVCBNnyDqVqW4nJm-IfWKHlqFHgEzNSm3I89-zaAJi2dl2vaPs9ee6Fxch2zO~wTnZDAdQqTkdfgeZkKuAXR4VhviMBWfzbJoYozKKZLpdEX2-mLrEKvyN6tWflEG5QnHMyShDxU3~f3A4p6w3oDBSLGS1dHeBYeY32CnmnpOuV6wb9hWuVixTzANOn6H1q1qmuRAhWJa-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 0,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'win',
        minutes: 90,
        goals: 1,
        score: {
          value: 1.26,
          trend: 'up',
        },
        yellowCards: 1,
        redCards: 0,
        additional: 'Pierwszy skład',
      },
      {
        homeTeam: {
          name: 'Górnik Polkowice',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/a757/3079/496e649ac952b3fbbb6b29bebfe3a1c1?Expires=1677456000&Signature=KoB-kXKkfVU3zeUzMSXp3pN79zhRp82rmH16Dhif3IYzbcg0yuA7ltPQTyECL3AlqATVbJNf-h7iRnP3H6zf6IlzRSaJZUZGdtaVd6wjDIvO5rQcDmN5Zl9TwydHM1Z3oXMQWjg1uWIDaOEBYGJJfvEXaDy4amvs20QYq4Qjku~02irI1djJX5tVcQaQTlFOJvX94nkNTWQ3Cls2q7jOapzYlBHMw8b8ZA8dcS925RiGouOpilGAem1bmzIMmO2ZRoaw-dr~8izh2hJlUwJxRDbOVWkvsri0jj9IRZS~iSZn8ZecQG2Mqyu1FsDXdj0xF4gFIjdN~0cJleexNQm5-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: false,
          score: 2,
        },
        awayTeam: {
          name: 'Pogoń Siedlce',
          logoUrl:
            'https://s3-alpha-sig.figma.com/img/4c8d/9dd7/1e6a9afb73bec293def71d05cac94106?Expires=1677456000&Signature=pBVkwJKi9H6aJMxNSczG7fzNhLgfwWRy3SOgxIP6OXxE4ZfCsNZ9XbEOTIshGwWhsANOhF668SUwMcBOFkwNn7m09DHX87rpwGabEgmJLYMZYLKHw6owA4E~WUfBQTbLvKRTuZhlBt~u~AxPFP2V~s2yCrPhsQepEcLoa3Ivy-fSocDw4ODCpLDcVc6PAgm~3XYBborsVeHZ0EM7mEuOBZUxAPhfeBlD67CKSKsKyux~5pVhCOmv4S4U2jt24OHPtP4LAxXxia8rjj2axs8fau6VWAvPgHO4qbfVHF~VDrc~wFLaKg87PQcZkaEcwaVOR-O3QGhSSCd0l21iJsg7Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          mainTeam: true,
          score: 2,
        },
        competition: '3 liga',
        date: new Date('2022-02-22').toISOString(),
        status: 'draw',
        minutes: 61,
        goals: 0,
        score: {
          value: 0.42,
          trend: 'down',
        },
        yellowCards: 0,
        redCards: 1,
        additional: 'Z ławki',
      },
    ],
    total: {
      minutes: 271,
      goals: 4,
      score: {
        value: 0.85,
        trend: 'up',
      },
      yellowCards: 1,
      redCards: 1,
    },
    avgMatch: {
      minutes: 94,
      goals: 0.8,
      score: {
        value: 0.27,
        trend: 'up',
      },
      yellowCards: 0.2,
      redCards: 0.2,
    },
  },
]
