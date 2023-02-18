import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/common/Button/Button'
import Spinner from '@/components/common/Spinner/spinner'
import { Heading } from '@/components/profile/common/Heading'
import { SectionContainer } from '@/components/profile/common/SectionContainer'

import SeasonPanel from '../career/season-panel'
import { ExperiencePanel } from './experience/experience-panel'
import { useProfileOverview } from './hooks'
import { PlayerBaseData } from './playerBaseData/playerBaseData'
import { PlayerSlider } from './slider/slider'

export const ProfileOverview = () => {
  const { data, isLoading } = useProfileOverview('overview')

  return (
    <AnimatePresence mode="wait">
      {isLoading || !data ? (
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

              <PlayerSlider {...data?.inShort} />
            </SectionContainer>
            <SectionContainer className="pb-0">
              <Heading>Dane podstawowe</Heading>
              <PlayerBaseData {...data?.playerData} />
            </SectionContainer>
            <SectionContainer className="px-0 pt-0">
              {data?.carrer.map(carrer => (
                <SeasonPanel key={carrer.season} {...carrer} />
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
              <ExperiencePanel {...data?.experience} />
            </SectionContainer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
