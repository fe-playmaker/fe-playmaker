import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import TrendDownIcon from 'img/icons/TrendDown.svg'
import TrendUpIcon from 'img/icons/Trendup.svg'

const scoreCva = cva(
  [
    'flex items-center justify-center  px-3 py-2 font-bold ',
    'text-primary bg-primaryShade-10',
  ],
  {
    variants: {
      type: {
        default: ['w-8 h-7 text-heading-micro'],
        hidden: ['w-[3.5rem] h-8 text-heading-smaller'],
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
)

const trendCva = cva(
  ['text-white', 'py-0 px-3', 'w-6 h-6', 'flex items-center justify-center'],
  {
    variants: {
      trend: {
        up: ['bg-greenShade-10'],
        down: ['bg-orangeShade-10'],
      },
    },
  },
)

type ScoreProps = VariantProps<typeof scoreCva>
type TrendScoreProps = VariantProps<typeof trendCva>

interface Props extends TrendScoreProps, ScoreProps {
  score: number
}

export const AdditionalScore = ({ trend, score, type }: Props) => (
  <div className={clsx('flex', trend === 'up' ? 'items-start' : 'items-end')}>
    <div className={scoreCva({ type })}>
      {type !== 'hidden' ? <span>{score}</span> : <span>?</span>}
    </div>
    {type !== 'hidden' && (
      <div className={trendCva({ trend })}>
        <p>
          {trend === 'up' ? (
            <TrendUpIcon className="icon-12" />
          ) : (
            <TrendDownIcon className="icon-12" />
          )}
        </p>
      </div>
    )}
  </div>
)
