import { useProfileHeader } from '@/components/profile/header/hooks'

export const GetBaseData = () => {
  const { data: profileHeaderData } = useProfileHeader('cezaryDemianiuk')

  const baseData = [
    {
      title: 'Wiek',
      content: `${profileHeaderData?.age} lat (1992)`,
    },
    {
      title: 'Wzrost',
      content: `${profileHeaderData?.height} cm`,
    },
    {
      title: 'Waga',
      content: `${profileHeaderData?.weight} kg`,
    },
    {
      title: 'Lokalizacja',
      content: profileHeaderData?.location,
    },
  ]

  const soccerFieldData = [
    {
      title: 'Poz. główna',
      content: profileHeaderData?.position,
      isVisibleDot: true,
    },
    {
      title: 'Poz. alternatywna',
      content: profileHeaderData?.alternatePosition,
      isVisibleDot: true,
    },
    {
      title: 'Lepsza noga',
      content: profileHeaderData?.betterLeg,
    },
  ]

  return { baseData, soccerFieldData }
}
