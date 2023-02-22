import { cx } from 'class-variance-authority'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TProfileMatches } from 'types/profile'
import { formatDate } from 'utils/format-date'

import PlayIcon from '@/icons/TriangleRight.svg'

import { TeamRow } from './components'
import { matchRowHeight, matchSummaryRowHeight } from './constants'

interface IProps {
  matches: TProfileMatches['matches']
  isScrolled: boolean
}

const MatchesTableLeftPart = ({ matches, isScrolled }: IProps) => (
  <div className="relative flex flex-col">
    {isScrolled && (
      <motion.div
        className="absolute -right-4 z-0 h-full w-4 "
        style={{
          background:
            'linear-gradient(90deg, rgba(217, 217, 217, 0.24) 0%, rgba(217, 217, 217, 0) 100%)',
        }}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -2, opacity: 0 }}
        transition={{ type: 'tween', duration: 0.15 }}
      />
    )}
    <div className="z-10 grid grid-rows-[1.2rem] items-end border-b-2 border-darkAlpha-5 bg-white pb-3 pl-4">
      <span className="ml-[0.375rem] text-body-xs text-darkAlpha-40">Mecz</span>
    </div>

    {matches.map(({ awayTeam, competition, date, homeTeam, wideo }, i) => (
      <div
        className={clsx(
          'z-10 flex items-center bg-white pl-4',
          matchRowHeight(!!wideo),
          i !== 0 && 'border-t border-darkShade-5',
        )}
      >
        <div
          className={clsx(
            'flex w-full flex-col justify-center',
            !isScrolled && 'shadow-[1px_0_0_0_#EDEDED]',
          )}
        >
          <TeamRow team={homeTeam} />
          <TeamRow team={awayTeam} className="mt-2" />
          <div className="mt-3 flex justify-between pr-4 text-[0.563rem] text-darkAlpha-20">
            <span>{formatDate(date)}</span>
            <span>{competition}</span>
          </div>
          {wideo && (
            <Link
              href={wideo}
              target="_blank"
              className="mr-4 mt-3 flex items-center justify-center gap-2 rounded py-1 text-body-sm font-bold text-darkAlpha-40 outline outline-1 outline-darkAlpha-20"
            >
              <PlayIcon className="h-3 fill-darkAlpha-40" /> Wideo
            </Link>
          )}
        </div>
      </div>
    ))}
    <div
      className={cx(
        matchSummaryRowHeight,
        'flex items-center border-t-2 border-darkShade-5 pl-6 text-body-sm text-darkAlpha-40',
      )}
    >
      Łącznie
    </div>
    <div
      className={cx(
        matchSummaryRowHeight,
        'flex items-center border-t border-darkShade-5 pl-6 text-body-sm text-darkAlpha-40',
      )}
    >
      Śr. / mecz
    </div>
  </div>
)

export default MatchesTableLeftPart
