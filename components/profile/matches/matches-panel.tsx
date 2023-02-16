import { IProfileMatchesSeason } from 'dummy-api/profile/matches'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from 'utils/format-date'

import BallIcon from '@/icons/Ball.svg'
import ClockIcon from '@/icons/ClockVariant.svg'
import GraphIcon from '@/icons/Graph.svg'
import WhistleIcon from '@/icons/Whistle.svg'

const MatchesPanel = ({
  avgMatch,
  matches,
  season,
  total,
}: IProfileMatchesSeason) => (
  <div className="flex flex-col">
    <div>
      <h4>{season}</h4> <span>pogon</span>
    </div>

    <div className="flex flex-col">
      <Grid>
        <span>Mecz</span>
        <span>
          <WhistleIcon className="icon-20" />
        </span>
        <span>
          <ClockIcon className="icon-20" />
        </span>
        <span>
          <BallIcon className="icon-20" />
        </span>
        <span>
          <GraphIcon className="icon-20" />
        </span>
        <span>
          <div className="h-[0.938rem] w-[0.625rem] bg-secondary" />
        </span>
        <span>
          <div className="h-[0.938rem] w-[0.625rem] bg-primary" />
        </span>
        <span>Dodatkowe</span>
      </Grid>
      {matches.map(
        ({
          additional,
          awayTeam,
          competition,
          date,
          goals,
          homeTeam,
          minutes,
          redCards,
          status,
          yellowCards,
          score,
          wideo,
        }) => (
          <Grid>
            <div>
              <div className="flex">
                <Image
                  src={homeTeam.logoUrl}
                  alt={homeTeam.name}
                  width={32}
                  height={32}
                  className="icon-16"
                />
                <span className="flex-1">{homeTeam.name}</span>
                <span className="">{homeTeam.score}</span>
              </div>
              <div className="flex">
                <Image
                  src={awayTeam.logoUrl}
                  alt={awayTeam.name}
                  width={32}
                  height={32}
                  className="icon-16"
                />
                <span className="flex-1">{awayTeam.name}</span>
                <span className="">{awayTeam.score}</span>
              </div>
              <div>
                <span>{formatDate(date)}</span>
                <span>{competition}</span>
              </div>
              {wideo && (
                <Link href={wideo} target="_blank">
                  Wideo
                </Link>
              )}
            </div>
          </Grid>
        ),
      )}
    </div>
  </div>
)

export default MatchesPanel

const Grid = ({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[]
  className?: string
}) => (
  <div
    className={`grid min-w-max grid-cols-[13.75rem_repeat(3,3rem)_3.5rem_3rem_3rem_5.75rem] gap-x-4 pr-5 ${
      className || ''
    }`}
  >
    {children}
  </div>
)
