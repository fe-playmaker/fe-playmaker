import { cva, VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import TrendUpIcon from '../../../../img/icons/Trendup.svg'

const pmScore = cva(['text-white', 'p-2'], {
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

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof pmScore> {
  readonly scoreValue: number
}

export const PlayMakerScore = ({ intent, scoreValue }: Props) => (
  <div className={twMerge('flex flex-col items-center gap-2')}>
    <div className={twMerge('flex items-start')}>
      <div
        className={twMerge(
          'flex h-8 w-8 items-center justify-center bg-primaryShade-10',
        )}
      >
        <span className={twMerge('font-bold text-primary')}>{scoreValue}</span>
      </div>
      <div className={pmScore({ intent })}>
        <p>
          <TrendUpIcon />
        </p>
      </div>
    </div>
    <p className={twMerge('text-center text-caption-sm')}>
      Playmaker <br /> score
    </p>
  </div>
)
