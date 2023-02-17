import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/common/Button/Button'
import { Heading } from '@/components/common/Heading/Heading'
import { SectionContainer } from '@/components/common/SectionContainer/SectionContainer'
import Spinner from '@/components/common/Spinner/spinner'

import { useProfileCareer } from '../career/hooks'
import SeasonPanel from '../career/season-panel'
import { useProfileHeader } from '../header/hooks'
import { PlayerBaseData } from './baseDataSection/baseDataSection'
import { ExperiencePanel } from './experience/experience-panel'
import { useProfileExperience } from './experience/hooks'
import { PlayerSlider } from './slider/slider'

export const ProfileOverview = () => {
  const { data: carrerData, isLoading: carrerLoading } =
    useProfileCareer('carrer')
  const { data: experienceData, isLoading: experienceLoading } =
    useProfileExperience('experience')
  const { data: basePlayerData, isLoading: basePlayerDataLoading } =
    useProfileHeader('69')

  return (
    <AnimatePresence mode="wait">
      {carrerLoading || experienceLoading || basePlayerDataLoading ? (
        <motion.div
          key="headerLoader"
          className="flex items-center justify-center py-10"
          exit={{ opacity: 0 }}
        >
          <Spinner size="large" />
        </motion.div>
      ) : (
        <motion.div
          key="headerContent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 gap-4">
            <SectionContainer className="mt-4">
              <Heading>W skrócie</Heading>
              <PlayerSlider />
            </SectionContainer>
            <SectionContainer className="pb-0">
              <Heading>Dane podstawowe</Heading>
              <PlayerBaseData {...basePlayerData} />
            </SectionContainer>
            <SectionContainer className="px-0 pt-0">
              {carrerData?.slice(0, 1).map(season => (
                <SeasonPanel {...season} />
              ))}
              <div className="flex w-full justify-center">
                <Button
                  intent="secondary"
                  size="small"
                  text="Zobacz całą karierę"
                />
              </div>
            </SectionContainer>
            <SectionContainer className="px-0">
              {experienceData?.map(experience => (
                <ExperiencePanel {...experience} />
              ))}
            </SectionContainer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
