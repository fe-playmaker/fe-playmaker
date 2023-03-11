import { LayoutGroup, motion } from 'framer-motion'
import {
  TProfileOverview,
  TProfileOverviewLastMatches,
  TProfileOverviewPMScore,
  TProfileOverviewRegularity,
} from 'types/profile'

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
  regularity: TProfileOverviewRegularity
  lastMatches: TProfileOverviewLastMatches
  pmScore: TProfileOverviewPMScore
}

export const ProfileOverview = ({
  data,
  lastMatches,
  regularity,
  pmScore,
}: IProps) => (
  <LayoutGroup>
    <motion.div className="flex flex-col gap-4 pb-9" layout>
      <InShortSection inShort={data.inShort} />
      <BaseDataSection playerData={data.playerData} />
      <CareerSeasonSection career={data.career} />
      <ExperienceSection experience={data.experience} />
      <RegularitySection
        data={regularity}
        playerName={data.playerData.firstName}
        team={data.playerData.team}
      />
      <LastMatchesSection
        lastMatches={lastMatches}
        playerFirstName={data.playerData.firstName}
        defaultTeamId={data.playerData.team.id}
      />
      <PlayMakerScoreSection
        score={pmScore.score}
        lastScore={pmScore.lastScore}
      />
      <GameVideoSection videoUrl={data.playerData.videoUrl} />
      <TransfersSection transfers={data.transfers} />
      <SimiliarPlayersSection
        className="md:hidden"
        similarPlayers={data.similarPlayers}
      />
    </motion.div>
  </LayoutGroup>
)
