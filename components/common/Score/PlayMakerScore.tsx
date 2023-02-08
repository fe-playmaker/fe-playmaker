import { cva, VariantProps } from 'class-variance-authority'
import TrendDownIcon from 'img/icons/TrendDown.svg'
import TrendUpIcon from 'img/icons/Trendup.svg'

const pmScoreCva = cva(['text-white', 'p-2'], {
  variants: {
    intent: {
      trendUp: ['bg-greenShade-10'],
      trendDown: ['bg-orangeShade-10'],
    },
    size: {
      small: ['text-label-md'],
      big: ['text-label-xl'],
    },
  },
  defaultVariants: {
    intent: 'trendUp',
    size: 'small',
  },
})

interface Props extends VariantProps<typeof pmScoreCva> {
  scoreValue: number
}

export const PlayMakerScore = ({ intent, scoreValue }: Props) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-start">
      <div className="flex h-8 w-8 items-center justify-center bg-primaryShade-10">
        <span className="font-bold text-primary">{scoreValue}</span>
      </div>
      <div className={pmScoreCva({ intent })}>
        <p>{intent === 'trendUp' ? <TrendUpIcon /> : <TrendDownIcon />}</p>
      </div>
    </div>
    <p className="text-center text-caption-sm">
      Playmaker <br /> score
    </p>
  </div>
)
