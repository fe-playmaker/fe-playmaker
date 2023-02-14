export interface IProfileHeaderData {
  premium: boolean
  score: {
    value: number
    trend: 'up' | 'down'
  }
  avatarUrl: string
  firstName: string
  lastName: string
  age: number
  position: string
  competition: string
  ownProfile: boolean
  // iso string
  lastActivity: string
  team: string
  banner: {
    type: 'searchingForClub' | string
    expectations?: string[]
  }
}

const date = new Date()
date.setUTCHours(new Date().getUTCHours() - 19)

export const profileHeaderData: IProfileHeaderData = {
  avatarUrl:
    'https://s3-alpha-sig.figma.com/img/6524/6bc8/9f63a6b65f195d589bbddecf123f6027?Expires=1677456000&Signature=iadM1KmcPPaz4DiRLEe1ahus3DraQitDhoUjd3~u8XmD67WvvYayaz~pqLaizLAFsHBfJBUJmMaJxD4fe~I~~3nuQ7Cbn8To6AnGENyImRGyl1Ragouotpru20STNeKOJaaxEGUSGuf6DIjA6oD-XGwUtwTr4NmyHZzHcqh7~u~wRnnQip2WG7wDjC8UssqCgvSqRMVtpzyyZZdaG3j5PIPR9vFhK1wCMQYLZzspgGCkUmH70J0f6MzK6N95zdEyCMlRMcc20F4aHxzTvr5YlHrOsLYejbAZopLD7Mm0L1-6G3QIB9goY4m0JRrEhaaKNfsn7RKpl2TJ4nyuzGGVdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  premium: true,
  ownProfile: false,
  score: {
    value: 63,
    trend: 'up',
  },
  firstName: 'Cezary',
  lastName: 'Demianiuk',
  team: 'Pogoń Siedlce',
  age: 30,
  position: 'Napastnik',
  competition: '3 liga',
  lastActivity: date.toISOString(),
  banner: {
    type: 'searchingForClub',
    expectations: ['zwrot za dojazdy', 'porsche'],
  },
}
