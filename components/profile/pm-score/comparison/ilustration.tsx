import clsx from 'clsx'

import IlustrationLeft from '@/icons/pm-score-comparison/Ilustration-left.svg'
import IlustrationMiddle from '@/icons/pm-score-comparison/Ilustration-middle.svg'
import IlustrationRight from '@/icons/pm-score-comparison/Ilustration-right.svg'
import PointerIcon from '@/icons/pm-score-comparison/Union.svg'

import { getPointerRotate } from './utils'

const ComparisonIlustration = ({
  comparisonPercentage,
}: {
  comparisonPercentage: number
}) => (
  <div className="relative mt-7 flex justify-center">
    <Ilustration
      className="w-[21.875rem] md:w-[23rem]"
      value={comparisonPercentage}
    />
    <div
      className={clsx(
        'absolute -bottom-8 flex max-h-[4.5rem] max-w-[4.5rem] items-center justify-center',

        comparisonPercentage > 49 && comparisonPercentage < 100
          ? 'mr-[8%] md:mr-[12%]'
          : 'mr-[4%] md:mr-[4%]',
      )}
    >
      <PointerIcon
        className="origin-[59.3%_50%] pt-2"
        style={{
          transform: `rotate(${getPointerRotate(comparisonPercentage)}deg)`,
        }}
      />
    </div>
  </div>
)

export default ComparisonIlustration

const Ilustration = ({
  value,
  className,
}: {
  value: number
  className: string
}) => {
  // 0 -  29
  // 30 - 49
  // 50 - 100

  if (value > 49) return <IlustrationLeft className={className} />

  if (value > 29) return <IlustrationMiddle className={className} />

  return <IlustrationRight className={className} />
}
