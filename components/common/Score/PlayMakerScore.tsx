import { cva, VariantProps } from 'class-variance-authority'
import TrendDownIcon from 'img/icons/TrendDown.svg'
import TrendUpIcon from 'img/icons/Trendup.svg'

const scoreCva = cva(
  [
    'flex items-center justify-center bg-primaryShade-10 px-3 py-2 font-bold text-primary',
  ],
  {
    variants: {
      scoreType: {
        default: ['w-[3.5rem] h-[3rem] text-heading-sm'],
        hidden: ['w-[5rem] h-[3rem] text-heading-md'],
      },
    },
  },
)

const trendCva = cva(
  [
    'text-white',
    'py-0 px-3',
    'w-[2.5rem] h-[2.5rem]',
    'flex items-center justify-center',
  ],
  {
    variants: {
      trendScoreType: {
        trendUp: ['bg-greenShade-10'],
        trendDown: ['bg-orangeShade-10'],
      },
    },
  },
)

type ScoreProps = VariantProps<typeof scoreCva>
type TrendScoreProps = VariantProps<typeof trendCva>

interface Props extends TrendScoreProps, ScoreProps {
  scoreValue: number
}

export const PlayMakerScore = ({
  trendScoreType,
  scoreValue,
  scoreType,
}: Props) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className={`flex ${
        trendScoreType === 'trendUp' ? 'items-start' : 'items-end'
      }`}
    >
      <div className={scoreCva({ scoreType })}>
        {scoreType !== 'hidden' ? <span>{scoreValue}</span> : <span>?</span>}
      </div>
      {scoreType !== 'hidden' && (
        <div className={trendCva({ trendScoreType })}>
          <p>
            {trendScoreType === 'trendUp' ? (
              <TrendUpIcon className="h-6 w-6" />
            ) : (
              <TrendDownIcon className="h-6 w-6" />
            )}
          </p>
        </div>
      )}
    </div>
    <p className="text-center text-caption-md text-darkAlpha-40">
      Playmaker <br /> score
    </p>
  </div>
)
