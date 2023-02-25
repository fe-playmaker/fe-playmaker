import { cx } from 'class-variance-authority'
import clsx from 'clsx'
import { TProfileMatches } from 'types/profile'

import BallIcon from '@/icons/Ball.svg'
import ClockIcon from '@/icons/ClockVariant.svg'
import GraphIcon from '@/icons/Graph.svg'
import ShieldIcon from '@/icons/ShieldPerfect.svg'
import WhistleIcon from '@/icons/Whistle.svg'

import {
  EmptyCell,
  Grid,
  MinutesBadge,
  ScoreIndicator,
  statusBadgeMap,
} from './components'
import { matchRowHeight, matchSummaryRowHeight } from './constants'

interface IProps {
  data: Pick<TProfileMatches, 'avgMatch' | 'matches' | 'total'>
  setIsScrolled: (value: boolean) => void
}

const MatchesTableRightPart = ({
  data: { avgMatch, matches, total },
  setIsScrolled,
}: IProps) => (
  <div
    className="flex flex-col overflow-x-auto"
    onScroll={e => setIsScrolled((e.target as any).scrollLeft > 8)}
  >
    <Grid className="grid-rows-[1.2rem] items-end justify-items-center border-b-2 border-darkAlpha-5 pb-3">
      <WhistleIcon className="fill-darkAlpha-40 icon-16" />
      <ClockIcon className="fill-darkAlpha-40 icon-16 " />
      {total.goals !== undefined && (
        <BallIcon className="fill-darkAlpha-40 icon-16 " />
      )}
      {total.clearAccounts !== undefined && <ShieldIcon className="icon-16 " />}
      <GraphIcon className="fill-darkAlpha-40 icon-16 " />
      <div className="h-[0.938rem] w-[0.625rem] rounded-sm bg-secondary" />
      <div className="h-[0.938rem] w-[0.625rem] rounded-sm bg-primary" />
      <span className="justify-self-end text-body-xs text-darkAlpha-40">
        Dodatkowe
      </span>
    </Grid>
    {matches.map(
      (
        {
          additional,
          goals,
          minutes,
          redCards,
          status,
          yellowCards,
          score,
          wideo,
          clearAccounts,
        },
        i,
      ) => (
        <Grid
          className={clsx(
            'items-center justify-items-center',
            matchRowHeight(!!wideo),
            i !== 0 && 'border-t border-darkAlpha-5',
            wideo && 'pb-8',
          )}
        >
          <div className="text-body-xs font-bold text-white">
            {statusBadgeMap[status]}
          </div>
          {minutes ? <MinutesBadge minutes={minutes} /> : <EmptyCell />}

          {goals !== undefined &&
            (goals ? (
              <span className="text-body-sm text-darkAlpha-40">{goals}</span>
            ) : (
              <EmptyCell />
            ))}
          {clearAccounts !== undefined &&
            (clearAccounts ? (
              <span className="text-body-sm text-darkAlpha-40">
                {clearAccounts}
              </span>
            ) : (
              <EmptyCell />
            ))}

          {score ? <ScoreIndicator score={score} /> : <EmptyCell />}
          <span className="text-body-sm font-bold text-darkAlpha-40">
            {yellowCards || '-'}
          </span>
          <span className="text-body-sm font-bold text-darkAlpha-40">
            {redCards || '-'}
          </span>
          {additional && (
            <span className="justify-self-end rounded-[0.188rem] py-1 px-3 text-body-xs font-bold text-darkAlpha-40 outline outline-darkShade-5">
              {additional}
            </span>
          )}
        </Grid>
      ),
    )}

    <Grid
      className={cx(
        matchSummaryRowHeight,
        'items-center justify-items-center border-t-2 border-darkShade-5',
      )}
    >
      <span />
      <MinutesBadge minutes={total.minutes} />
      <span className="text-body-sm text-darkAlpha-40">{total.goals}</span>
      <ScoreIndicator score={total.score} />
      <span className="text-body-sm text-darkAlpha-40">
        {total.yellowCards}
      </span>
      <span className="text-body-sm text-darkAlpha-40">{total.redCards}</span>
    </Grid>

    <Grid
      className={cx(
        matchSummaryRowHeight,
        'items-center justify-items-center border-t border-darkShade-5',
      )}
    >
      <span />
      <MinutesBadge minutes={avgMatch.minutes} />
      <span className="text-body-sm text-darkAlpha-40">{avgMatch.goals}</span>
      <ScoreIndicator score={avgMatch.score} />
      <span className="text-body-sm text-darkAlpha-40">
        {avgMatch.yellowCards}
      </span>
      <span className="text-body-sm text-darkAlpha-40">
        {avgMatch.redCards}
      </span>
    </Grid>
  </div>
)

export default MatchesTableRightPart
