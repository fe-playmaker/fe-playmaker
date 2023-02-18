import { cx } from 'class-variance-authority'
import { IProfileMatchesSeason } from 'dummy-api/profile/matches'
import Image from 'next/image'

import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

export const Grid = ({
  children,
  className,
}: {
  children: React.ReactNode[]
  className?: string
}) => (
  <div
    className={`grid min-w-max grid-cols-[repeat(3,2rem)_3rem_2rem_2rem_6rem] gap-x-4 pr-5 pl-4 ${
      className || ''
    }`}
  >
    {children}
  </div>
)

export const EmptyCell = () => (
  <span className="text-body-sm font-bold text-darkAlpha-40">-</span>
)

export const ScoreIndicator = ({
  score,
}: {
  score: IProfileMatchesSeason['total']['score']
}) => (
  <span
    className={`flex items-center gap-1 text-body-sm font-bold ${
      score.trend === 'up' ? 'text-greenShade-50' : 'text-orangeShade-50'
    }`}
  >
    {score.trend === 'up' ? (
      <TrendUpIcon className="icon-12" />
    ) : (
      <TrendDownIcon className="icon-12" />
    )}
    {score.value}
  </span>
)

export const MinutesBadge = ({ minutes }: { minutes: number }) => (
  <div className="rounded-[0.188rem] px-3 py-[0.1567rem] text-body-xs font-bold text-darkAlpha-40 outline outline-1 outline-light">
    {minutes}’
  </div>
)

const baseStatus =
  'w-[1.5rem] rounded-[0.188rem] h-[1.25rem] flex items-center justify-center'

export const statusBadgeMap = {
  win: <div className={cx('bg-greenShade-50', baseStatus)}>W</div>,
  loss: <div className={cx('bg-orangeShade-50', baseStatus)}>P</div>,
  draw: <div className={cx('bg-darkShade-40', baseStatus)}>R</div>,
}

export const TeamRow = ({
  team,
  className,
}: {
  team:
    | IProfileMatchesSeason['matches'][number]['awayTeam']
    | IProfileMatchesSeason['matches'][number]['homeTeam']
  className?: string
}) => (
  <div className={cx('relative flex items-center', className)}>
    {team.mainTeam && (
      <div className="absolute -left-4 h-full w-1 bg-primary" />
    )}
    <Image
      src={team.logoUrl}
      alt={team.name}
      width={32}
      height={32}
      className="icon-16"
    />
    <span className="max-w-[6.2rem] flex-1 truncate pl-[0.375rem] pr-3 text-body-xs text-darkAlpha-40">
      {team.name}
    </span>
    <span className="w-8 text-center text-body-sm font-bold text-darkAlpha-40">
      {team.score}
    </span>
  </div>
)
