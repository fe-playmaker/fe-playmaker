import { cx } from 'class-variance-authority'
import clsx from 'clsx'
import { IProfileCareerData } from 'dummy-api/profile/career'
import Image from 'next/image'

import HelpCircleIcon from '@/icons/HelpCircle.svg'

import { seasonMap } from './helpers'

const SeasonTable = ({
  data,
  total,
  season,
}: Pick<IProfileCareerData, 'data' | 'total' | 'season'>) => (
  <div className=" flex flex-col overflow-x-auto font-medium">
    <Grid className="items-end border-b-2 border-darkAlpha-5 py-3 text-center text-body-xs text-darkAlpha-40">
      <span className="text-left">Drużyna</span>
      <span>Mecze</span>
      <span>Bramki</span>
      <span>Śr. bramek</span>
      <span>Śr. minut</span>
      <span>Łącznie minut</span>
    </Grid>
    {data.map((row, i) => (
      <Grid
        key={row.team + season}
        className={clsx(
          'relative items-center py-5 text-center',
          i !== 0 && 'border-t border-darkAlpha-5',
          row.mainTeam &&
            'before:absolute before:top-0 before:h-[calc(100%+1px)] before:w-[0.188rem] before:bg-primary',
        )}
      >
        <div className="flex gap-3 justify-self-start text-left">
          <Image
            src={row.teamLogoUrl}
            alt={row.team}
            width={48}
            height={48}
            className="mt-2 h-auto w-7 self-start"
          />
          <div className="flex flex-col ">
            <span
              className={`text-body-sm ${
                row.mainTeam ? 'text-dark' : 'text-darkAlpha-40'
              }`}
            >
              {row.team}
            </span>
            <span className="text-body-xs text-darkAlpha-20">
              {row.competition}
            </span>
            {row.season && (
              <span className={cx('text-body-xs', seasonMap[row.season])}>
                {row.season}
              </span>
            )}
            {row.mainTeam && (
              <span className="text-body-xs text-darkAlpha-20">
                Główna Drużyna
              </span>
            )}
          </div>
        </div>
        <span className="flex items-center justify-center gap-2 text-body-md text-darkAlpha-40">
          {row.matches}
          <HelpCircleIcon className="icon-12" />
        </span>
        <span className="text-body-md text-darkAlpha-40">{row.goals}</span>
        <span className="text-body-md text-darkAlpha-40">{row.avgGoals}</span>
        <span className="text-body-md text-darkAlpha-40">{row.avgMinutes}</span>
        <span className="text-body-md text-darkAlpha-40">
          {row.totalMinutes}
        </span>
      </Grid>
    ))}
    <Grid className="border-t-2 border-darkAlpha-5 py-5 text-center text-body-md font-bold text-darkAlpha-40">
      <span className="text-left text-body-sm font-medium">Łącznie</span>
      <span>{total.matches}</span>
      <span>{total.goals}</span>
      <span>{total.avgGoals}</span>
      <span>{total.avgMinutes}</span>
      <span>{total.totalMinutes}</span>
    </Grid>
  </div>
)

export default SeasonTable

const Grid = ({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[]
  className?: string
}) => (
  <div
    className={`grid min-w-max grid-cols-[9.25rem_repeat(5,3rem)] gap-x-4 pl-6 pr-5 ${
      className || ''
    }`}
  >
    {children}
  </div>
)
