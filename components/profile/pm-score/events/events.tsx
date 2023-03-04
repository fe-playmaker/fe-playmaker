import { cx } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { TProfilePMScore } from 'types/profile'

import ChevronDownIcon from '@/icons/ChevronDown.svg'
import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'

const PMScoreEvents = ({ events }: Pick<TProfilePMScore, 'events'>) => {
  const [show, setShowCount] = useState(3)

  return (
    <SectionContainer layout>
      <Heading layout>Zdarzenia</Heading>

      <div className="overflow-hidden">
        {events.slice(0, show).map(({ info, trend, value }) => (
          <motion.div
            className="flex items-center gap-7 border-darkShade-5 py-5 [&:not(:first-child)]:border-t"
            key={info + value}
            layout
          >
            <div className="flex gap-2">
              <span
                className={cx(
                  'font-poppins text-heading-micro font-bold md:text-heading-xs',
                  trend === 'up' ? 'text-greenShade-50' : 'text-orangeShade-50',
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
        ))}
      </div>

      {show < events.length && (
        <div className="flex justify-center bg-white pt-6">
          <button
            type="button"
            className="flex items-center gap-2 text-label-sm font-medium text-darkAlpha-40"
            onClick={() => setShowCount(value => value + 3)}
          >
            Pokaż kolejne <ChevronDownIcon className="w-5 fill-darkAlpha-40" />
          </button>
        </div>
      )}
    </SectionContainer>
  )
}

export default PMScoreEvents
