import { cx } from 'class-variance-authority'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { TProfilePMScore } from 'types/profile'

import { ShowMoreButton } from '@/components/common/ShowMoreButton/show-more-button'
import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'

const PMScoreEvents = ({ events }: Pick<TProfilePMScore, 'events'>) => {
  const [show, setShowCount] = useState(3)

  return (
    <SectionContainer className="md:pb-6" layout>
      <Heading layout>Zdarzenia</Heading>

      <div className="overflow-hidden">
        {events.slice(0, show).map(({ info, trend, value }) => (
          <AnimatePresence>
            <motion.div
              className="flex items-center gap-7 border-darkShade-5 py-5 [&:not(:first-child)]:border-t"
              key={info + value}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-2">
                <span
                  className={cx(
                    'font-poppins text-heading-micro font-bold md:text-heading-xs',
                    trend === 'up'
                      ? 'text-greenShade-50'
                      : 'text-orangeShade-50',
                  )}
                >
                  {trend === 'up' ? '+' : '-'}
                  {value}
                </span>
                {trend === 'up' ? (
                  <TrendUpIcon className="icon-20" />
                ) : (
                  <TrendDownIcon className="icon-20" />
                )}
              </div>
              <span className="font-inter text-body-sm font-medium text-darkAlpha-40 md:text-body-md">
                {info}
              </span>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>

      {show < events.length && <ShowMoreButton setShowCount={setShowCount} />}
    </SectionContainer>
  )
}

export default PMScoreEvents
