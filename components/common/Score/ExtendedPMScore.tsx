import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import TrendDownIcon from 'img/icons/TrendDown.svg'
import TrendUpIcon from 'img/icons/Trendup.svg'
import { TProfilePMScore } from 'types/profile'

const scoreCva = cva(
  [
    'flex items-center justify-center h-[5rem] md:h-[6.5rem] px-3 py-2',
    'font-bold text-primary bg-primaryShade-10',
  ],
  {
    variants: {
      type: {
        default: ['text-heading-lg md:text-heading-xl'],
        hidden: [''],
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
)

const trendCva = cva(
  ['py-5 md:px-8 pl-5 h-[5rem] md:h-[6.5rem]', 'flex items-center gap-6'],
  {
    variants: {
      trend: {
        up: ['bg-greenShade-10 text-greenShade-50'],
        down: ['bg-orangeShade-10 text-orangeShade-50'],
        hidden: ['text-darkShade-40 bg-transparent blur-md'],
      },
    },
  },
)

type PmScore = Pick<TProfilePMScore, 'score' | 'lastScore'>

interface IProps extends PmScore {
  hidden?: boolean
}

export const ExtendedScore = ({ lastScore, score, hidden }: IProps) => (
  <div className="grid grid-cols-[1fr,_2fr] gap-2 md:gap-3">
    <div className={scoreCva({ type: hidden ? 'hidden' : 'default' })}>
      {!hidden ? <span>{score}</span> : <span>?</span>}
    </div>
    <div>
      <div className={trendCva({ trend: lastScore.trend })}>
        <div className="flex items-center gap-2 md:pr-7">
          <p>
            {lastScore.trend === 'up' ? (
              <TrendUpIcon className="h-6 w-6" />
            ) : (
              <TrendDownIcon className="h-6 w-6" />
            )}
          </p>
          <p className="text-heading-xs font-bold md:text-heading-smaller">
            {lastScore.value}
          </p>
        </div>
        <div
          className={clsx(
            'h-full max-h-8 border-l-2 border-dotted border-transparent py-7 opacity-50',
            lastScore.trend === 'up'
              ? 'border-greenShade-50'
              : 'border-orangeShade-50',
          )}
        />
        <div className="flex flex-col font-inter text-body-xs">
          {lastScore.trend === 'up' && (
            <p className="font-bold text-greenShade-50 md:text-body-md">
              Dobra forma
            </p>
          )}

          <p className="font-medium text-darkAlpha-40 md:text-body-sm">
            Ostatnie 5 meczów
          </p>
        </div>
      </div>
    </div>
  </div>
)
