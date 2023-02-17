export interface IProfileExperienceData {
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

export const profileExperienceData: IProfileExperienceData[] = [
  {
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
]
