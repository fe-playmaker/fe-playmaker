import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import TrendDownIcon from 'img/icons/TrendDown.svg'
import TrendUpIcon from 'img/icons/Trendup.svg'

const scoreCva = cva(
  [
    'flex items-center justify-center h-[5rem] px-3 py-2',
    'font-bold text-primary bg-primaryShade-10 text-heading-lg',
  ],
  {
    variants: {
      type: {
        default: ['text-heading-sm'],
        hidden: ['text-heading-md'],
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
)

const trendCva = cva(['py-5 pl-5 h-[5rem]', 'flex items-center gap-6'], {
  variants: {
    trend: {
      up: ['bg-greenShade-10 text-greenShade-50'],
      down: ['bg-orangeShade-10 text-orangeShade-50'],
      hidden: ['text-darkShade-40 bg-transparent blur-md'],
    },
  },
})

type ScoreProps = VariantProps<typeof scoreCva>
type TrendScoreProps = VariantProps<typeof trendCva>

interface Props extends TrendScoreProps, ScoreProps {
  score: number
}

export const ExtendedScore = ({ score, type, trend }: Props) => (
  <div className="grid grid-cols-[1fr,_2fr] gap-2">
    <div className={scoreCva({ type })}>
      {type !== 'hidden' ? <span>{score}</span> : <span>?</span>}
    </div>
    <div>
      <div className={trendCva({ trend })}>
        <div className="flex items-center gap-2">
          <p>
            {trend === 'up' ? (
              <TrendUpIcon className="h-6 w-6" />
            ) : (
              <TrendDownIcon className="h-6 w-6" />
            )}
          </p>
          <p className="text-heading-xs font-bold">0.72</p>
        </div>
        <div
          className={clsx(
            'h-full max-h-8 border-l-2 border-dotted border-transparent opacity-50',
            trend === 'up' ? 'border-greenShade-50' : 'border-orangeShade-50',
          )}
        />
        <div className="flex flex-col font-inter text-body-xs">
          {trend === 'up' && (
            <p className="font-bold text-greenShade-50">Dobra forma</p>
          )}

          <p className="font-medium text-darkAlpha-40">Ostatnie 5 meczów</p>
        </div>
      </div>
    </div>
  </div>
)
