import Avatar from 'img/mock/avatar.png'
import { TProfileHeader } from 'types/profile'

const date = new Date()
date.setUTCHours(new Date().getUTCHours() - 19)

export const profileHeaderData: TProfileHeader = {
  avatarUrl: Avatar.src,
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
