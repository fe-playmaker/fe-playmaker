import IlustrationLeft from '@/icons/pm-score-comparison/Ilustration-left.svg'
import IlustrationMiddle from '@/icons/pm-score-comparison/Ilustration-middle.svg'
import IlustrationRight from '@/icons/pm-score-comparison/Ilustration-right.svg'
import PointerIcon from '@/icons/pm-score-comparison/Pointer.svg'

import { getPointerRotate } from './utils'

const ComparisonIlustration = ({
  comparisonPercentage,
}: {
  comparisonPercentage: number
}) => (
  <div className="relative mt-7 flex justify-center md:rotate-90">
    <Ilustration className="w-[21.875rem]" value={comparisonPercentage} />
    <div
      className="absolute -bottom-[2.4rem] flex h-[5rem] w-[5rem] items-center justify-center"
      style={{
        transform: `rotate(${getPointerRotate(comparisonPercentage)}deg)`,
      }}
    >
      {/* helper center box */}
      {/* <div className="absolute z-20 h-[20%] w-[20%] bg-primary" /> */}
      <div className="absolute mt-[24%] mr-[14.8%] h-full w-full">
        <PointerIcon />
      </div>
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

  if (value > 49) return <IlustrationRight className={className} />

  if (value > 29) return <IlustrationMiddle className={className} />

  return <IlustrationLeft className={className} />
}
