'use client'

import { AnimatePresence } from 'framer-motion'
import { useCompetitionLevelsList } from 'hooks/lists/competition-levels'
import { useSeasonsList } from 'hooks/lists/seasons'
import { useTeamsList } from 'hooks/lists/teams'
import { useState } from 'react'

import { Chip } from '@/components/common/Chips/Chip'
import { InputSelect } from '@/components/common/Select/select'

import { Heading } from '../common/Heading'
import TabLoadingSpinner from '../common/tab-loader/spinner'
import { TabContentWrapper } from '../common/tab-loader/tab-wrapper'
import { useProfileMatches } from './hooks'
import MatchesPanel from './matches-panel'

const ProfileMatches = () => {
  const { data, isLoading } = useProfileMatches('96')
  const { data: seasonsData } = useSeasonsList()
  const { data: teamsData } = useTeamsList()
  const { data: competitionLevelsData } = useCompetitionLevelsList()

  const [, setOnlyWithPlayer] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {isLoading || !data ? (
        <TabLoadingSpinner key="matches-spinner" />
      ) : (
        <TabContentWrapper className="mt-4 pb-9" key="matches-content">
          <div className="bg-white pl-6 pt-8 pb-7 md:pl-8">
            <Heading className="pb-0 md:pb-0">Mecze</Heading>
            <div className="mt-5 flex gap-3 overflow-x-clip md:mt-7">
              <InputSelect
                size="small"
                desktopSize="medium"
                type="filter"
                name="Sezon"
                inputName="season"
                items={seasonsData || []}
              />
              <InputSelect
                size="small"
                desktopSize="medium"
                type="filter"
                name="Drużyna"
                inputName="team"
                items={teamsData || []}
              />
              <InputSelect
                size="small"
                desktopSize="medium"
                type="filter"
                name="Poziom rozgrywkowy"
                inputName="competitionLevel"
                items={competitionLevelsData || []}
              />
              <Chip
                title="Tylko z udziałem zawodnika"
                selectChipHandler={(_, selected) => setOnlyWithPlayer(selected)}
              />
            </div>
          </div>
          {data.map(season => (
            <MatchesPanel {...season} key={season.season} />
          ))}
        </TabContentWrapper>
      )}
    </AnimatePresence>
  )
}

export default ProfileMatches
