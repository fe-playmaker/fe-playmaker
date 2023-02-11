import { IMatchResult } from '@/components/common/Match-result/types'

export const tabs = ['Przegląd', 'Kariera', 'Mecze', 'PlayMaker Score']

export const testMatchResultData: IMatchResult = {
  actualTeam: {
    name: 'Górnik Wałbrzych',
    logo: 'https://s3-alpha-sig.figma.com/img/b8b4/d852/8cc88055010f7ec3e9ffa7a2b7cbffe9?Expires=1676851200&Signature=h69He42m15qmzy~RXH6MqsfS7jIhsnYxz6GwCtQjZIdokdkwgc2bACVTlxoj3SfwlMDAwGzbZloA68EuScE1vAwbVJYDmS7Qq5eiawmhAGtqW9PukLnMC21BXIFinKG5q8HBGn59XZN4mESCji2t133PrcsQl2hNWijMzQJ7RO9J8rrpchmyTppHjIKioo5WWaLntsa~PFrkCXYnhelIYM38keahb4Phixqx98-Epl7kGofArIKspFMwHNRdjJUH6xsRL3wYwDZ~QAk17v8awe46QfOIzT5PsTMkOIbxH3gAdr7XOfmYpOicVZndQnXzVXSZ2aoUiBOmqsDDZC8PhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    goals: 2,
    playerPlayed: true,
  },
  oposingTeam: {
    name: 'Polonia Trzebnica',
    goals: 1,
    logo: 'https://s3-alpha-sig.figma.com/img/b120/7f86/3f72c487205e8f4b79ec561c5860ce15?Expires=1676851200&Signature=Km2cSo5T9XZDAxgfMtuyITEfmwnL8EGQEv8ioCEMwoWr6n9-mNFH0KItkW5dzwrK6tJdjdRuYerrTic5IKzFFV2dVdQHSllGFCiSSo6K7icM~GraTKFtxJhRVFne4cTCrWhO6IakFHnoHSb-~W-qSfRrti31Guqa8atUnB~3JpszzofpQTikoAsvnAOXsbEE8Jy-Jp6UqZCrYtWjLhv8X5FeaUnt05zyCLNrCWBpqSd4CFo-5NBC4yW5pqI1XS6yWoLiC4wgmT1lMlozEH2dNFSDLrVtfWjEbUjY5CuUPcLNgUrOisQ8h6kvNXW5WJphXZ1GptJ1WB1kjUoP3DG5RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  date: new Date().toString(),
  status: 'win',
  playerStats: {
    clearAccount: true,
    goals: 1,
    minutes: 72,
    redCards: 1,
    yellowCards: 1,
    score: {
      value: 0.68,
      trend: 'up',
    },
  },
  noParticipation: false,
  video: 'dsd',
}
