import clsx from 'clsx'
import format from 'date-fns/format'

import BallIcon from '@/icons/Ball.svg'
import RedCardIcon from '@/icons/CardRedHand.svg'
import YellowCardIcon from '@/icons/CardYellowHand.svg'
import ShieldIcon from '@/icons/ShieldPerfect.svg'
import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/TrendUp.svg'
import WhistleIcon from '@/icons/Whistle.svg'

import { IMatchResult } from './types'

const iconSize = 'w-5 h-5'

interface IProps
  extends Pick<IMatchResult, 'date' | 'noParticipation' | 'playerStats'> {}

const MatchResultStats = ({ playerStats, date, noParticipation }: IProps) => (
  <div className="flex items-center justify-between px-6 pb-6">
    <span className="text-body-xs font-medium text-darkAlpha-20">
      {format(new Date(date), 'dd.MM.yyyy')}
    </span>
    {noParticipation ? (
      <div>
        <span className="text-body-sm font-medium text-darkAlpha-20">
          Poza kadrą <span className="pl-4 font-bold">--</span>
        </span>
      </div>
    ) : (
      playerStats && (
        <div className="flex flex-col gap-3">
          {playerStats.clearAccount && (
            <div className="flex items-center gap-2 self-end text-body-sm font-medium text-darkAlpha-40">
              <ShieldIcon className={iconSize} />
              Czyste konto
            </div>
          )}
          <div className="flex gap-4">
            {playerStats.goals && (
              <div className="flex gap-[0.313rem] text-body-sm font-bold text-darkAlpha-40">
                <BallIcon className={iconSize} />x{playerStats.goals}
              </div>
            )}
            <div className="flex gap-[0.313rem] text-body-sm font-bold text-darkAlpha-40">
              <WhistleIcon className={iconSize} />
              {playerStats.minutes}&apos;
            </div>
            {(playerStats.redCards || playerStats.yellowCards) && (
              <div className="flex">
                {playerStats.yellowCards && (
                  <YellowCardIcon className={iconSize} />
                )}
                {playerStats.redCards && (
                  <RedCardIcon
                    className={clsx(
                      iconSize,
                      playerStats.yellowCards && '-ml-3',
                    )}
                  />
                )}
              </div>
            )}
            <div
              className={clsx(
                'flex gap-[0.313rem] text-body-sm font-bold',
                (playerStats.score.trend === 'up' && 'text-greenShade-50') ||
                  'text-orangeShade-50',
              )}
            >
              {playerStats.score.trend === 'up' ? (
                <TrendUpIcon className={iconSize} />
              ) : (
                <TrendDownIcon className={iconSize} />
              )}
              {playerStats.score.value}
            </div>
          </div>
        </div>
      )
    )}
  </div>
)

export default MatchResultStats
