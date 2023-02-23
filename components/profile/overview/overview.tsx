import { AnimatePresence } from 'framer-motion'

import { Button } from '@/components/common/Button/Button'
import { Heading } from '@/components/profile/common/Heading'
import { SectionContainer } from '@/components/profile/common/SectionContainer'
import ArrowDownIcon from '@/icons/ArrowDown.svg'
import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'
import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

import SeasonPanel from '../career/season-panel'
import TabLoadingSpinner from '../common/tab-loader/spinner'
import { TabContentWrapper } from '../common/tab-loader/tab-wrapper'
import { ExperiencePanel } from './experience/experience-panel'
import { GameVideo } from './gameVideo/gameVideo'
import { useProfileOverview } from './hooks'
import { LastMatchesPanel } from './lastMatches/last-matches-panel'
import { PlayerBaseData } from './playerBaseData/playerBaseData'
import { PlayerScore } from './playMakerScore/playMakerScore'
import { Regularity } from './regularity/regularity'
import { SimilarPlayers } from './similarPlayers/similarPlayers'
import { PlayerSlider } from './slider/slider'
import { Transfers } from './transfers/transfers'

export const ProfileOverview = () => {
  const { data, isLoading } = useProfileOverview('overview')

  return (
    <AnimatePresence mode="wait">
      {isLoading || !data ? (
        <TabLoadingSpinner key="overview-spinner" />
      ) : (
        <TabContentWrapper>
          <div className="grid grid-cols-1 gap-4">
            <SectionContainer className="mt-4">
              <Heading>W skrócie</Heading>

              <PlayerSlider {...data} />
            </SectionContainer>
            <SectionContainer className="pb-0">
              <Heading>Dane podstawowe</Heading>
              <PlayerBaseData {...data.playerData} />
            </SectionContainer>
            <SectionContainer className="px-0 pt-0">
              <SeasonPanel key={data.career.season} {...data.career} />

              <div className="flex w-full justify-center">
                <Button
                  intent="secondary"
                  size="small"
                  text="Zobacz całą karierę"
                />
              </div>
            </SectionContainer>
            <SectionContainer className="px-0">
              <ExperiencePanel {...data.experience} />
            </SectionContainer>
            <SectionContainer>
              <div className="flex items-center justify-between">
                <Heading className="flex items-center gap-2 pb-0">
                  Regularność gry
                </Heading>
                <div className="flex items-center gap-2">
                  <p className="text-label-sm text-darkAlpha-40">
                    Pogoń Siedlce (3 liga)
                  </p>
                  <ArrowRightIcon className="rotate-90 icon-16" />
                </div>
              </div>

              <Regularity
                {...data.regularity}
                clubLogo={data.playerData.clubLogo}
                name={data.playerData.name}
              />
            </SectionContainer>
            <SectionContainer className="px-0">
              <div className="flex items-center justify-between px-6">
                <Heading className="flex items-center gap-2 pb-0">
                  Ostatnie mecze <ArrowRightIcon className="icon-16" />
                </Heading>
                <div className="flex items-center gap-2">
                  <p className="text-label-sm text-darkAlpha-40">
                    Pogoń Siedlce (3 liga)
                  </p>
                  <ArrowRightIcon className="rotate-90 icon-16" />
                </div>
              </div>
              <div className="mx-6 my-7 flex items-center gap-7 bg-white p-5 pl-7 shadow-default">
                {data.lastMatch.playerStandedOut ? (
                  <TrendUpIcon className="icon-32" />
                ) : (
                  <TrendDownIcon className="icon-32" />
                )}

                <div className="font-inter text-body-sm">
                  <h4 className="font-bold">PlayMaker Score</h4>
                  <p className="font-medium text-darkAlpha-40">
                    {data.playerData.name}{' '}
                    {data.lastMatch.playerStandedOut
                      ? 'w ostatnich 5 meczach wyróżniał się'
                      : 'w ostatnich 5 meczach miał kilka poślizgnięć.'}
                  </p>
                </div>
              </div>

              <LastMatchesPanel
                {...data.lastMatch.data}
                key={data.lastMatch.data.season}
              />

              <div className="flex justify-center">
                <Button size="small" text="Zobacz więcej" intent="secondary" />
              </div>
            </SectionContainer>

            <SectionContainer>
              <Heading className="flex items-center gap-2">
                PlayMaker Score <ArrowRightIcon className="icon-16" />
              </Heading>
              <PlayerScore />
            </SectionContainer>
            <SectionContainer>
              <Heading>Wideo z gry</Heading>
              <GameVideo {...data} />
            </SectionContainer>
            <SectionContainer>
              <Heading>Transfery</Heading>
              <Transfers {...data} />
              <div className="flex justify-center">
                <p className="flex items-center gap-2 pt-6 text-label-sm text-darkAlpha-40">
                  Pokaż kolejne <ArrowDownIcon className="icon-16" />
                </p>
              </div>
            </SectionContainer>
            <SectionContainer>
              <Heading>Podobni zawodnicy</Heading>
              <SimilarPlayers {...data} />
              <div className="flex justify-center">
                <p className="flex items-center gap-2 pt-6 text-label-sm text-darkAlpha-40">
                  Pokaż kolejnych <ArrowDownIcon className="icon-16" />
                </p>
              </div>
            </SectionContainer>
          </div>
        </TabContentWrapper>
      )}
    </AnimatePresence>
  )
}
