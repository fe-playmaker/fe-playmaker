import { cva, VariantProps } from 'class-variance-authority'
import TrendDownIcon from 'img/icons/TrendDown.svg'
import TrendUpIcon from 'img/icons/Trendup.svg'

const scoreCva = cva(
  [
    'flex items-center justify-center bg-primaryShade-10 px-3 py-2 font-bold text-primary',
  ],
  {
    variants: {
      type: {
        default: ['w-[3rem] h-[2.5rem] text-heading-sm'],
        hidden: ['w-[5rem] h-[2.5rem] text-heading-md'],
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
)

const trendCva = cva(
  ['text-white', 'py-0 px-3', 'w-8 h-8', 'flex items-center justify-center'],
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

export const PlayMakerScore = ({ trend, score, type }: Props) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`flex ${trend === 'up' ? 'items-start' : 'items-end'}`}>
      <div className={scoreCva({ type })}>
        {type !== 'hidden' ? <span>{score}</span> : <span>?</span>}
      </div>
      {type !== 'hidden' && (
        <div className={trendCva({ trend })}>
          <p>
            {trend === 'up' ? (
              <TrendUpIcon className="icon-20" />
            ) : (
              <TrendDownIcon className="icon-20" />
            )}
          </p>
        </div>
      )}
    </div>
    <p className="text-center font-inter text-caption-sm leading-3 tracking-wide text-darkAlpha-40">
      PlayMaker <br /> Score
    </p>
  </div>
)
