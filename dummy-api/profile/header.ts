import { TProfileHeader } from 'types/profile'

const date = new Date()
date.setUTCHours(new Date().getUTCHours() - 19)

export const profileHeaderData: TProfileHeader = {
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
  status: {
    answerPercentage: 99,
    searchingForClub: {
      description:
        'Jestem ambitny i gotowy do ciężkiej pracy. Wracam po kontuzji. Szukam klubu, który pozwoli mi się odbudować.',
      localization: {
        name: 'Warszawa (woj. mazowieckie) ',
        range: 50,
      },
      additional: 'Wracam po kontuzji',
      expectations: ['zwrot za dojazdy', 'porsche'],
    },
  },
}
