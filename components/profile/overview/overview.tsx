import { TProfileOverview } from 'types/profile'

import BaseDataSection from './baseData/baseData'
import CareerSeasonSection from './careerSeason/careerSeason'
import { ExperienceSection } from './experience/experience'
import { GameVideoSection } from './gameVideo/gameVideo'
import InShortSection from './inShort/inShort'
import LastMatchesSection from './lastMatches/last-matches'
import PlayMakerScoreSection from './playMakerScore/pm-score'
import RegularitySection from './regularity/regularity'
import SimiliarPlayersSection from './similarPlayers/similiar-players'
import TransfersSection from './transfers/transfers'

interface IProps {
  data: TProfileOverview
}

export const ProfileOverview = ({ data }: IProps) => (
  <div className="grid grid-cols-1 gap-4 pb-9">
    <InShortSection inShort={data.inShort} />
    <BaseDataSection playerData={data.playerData} />
    <CareerSeasonSection career={data.career} />
    <ExperienceSection experience={data.experience} />
    <RegularitySection
      data={data.regularity}
      playerName={data.playerData.firstName}
    />
    <LastMatchesSection
      lastMatches={data.lastMatches}
      playerFirstName={data.playerData.firstName}
    />
    <PlayMakerScoreSection pmScore={data.pmScore} />
    <GameVideoSection videoUrl={data.playerData.videoUrl} />
    <TransfersSection transfers={data.transfers} />
    <SimiliarPlayersSection similarPlayers={data.similarPlayers} />
  </div>
)
