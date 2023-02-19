import Graph from 'img/illustrations/Graph.svg'

import { Button } from '@/components/common/Button/Button'
import { Chips } from '@/components/common/Chips/Chips'
import { ExtendedScore } from '@/components/common/Score/ExtendedPMScore'

const chips = [
  'Ostatnie 5 meczów',
  'Ostatnia rudna',
  'Ostatni sezon',
  'Ostatnie 2 lata',
  'Ostatnie 3 lata',
]

export const PlayerScore = () => (
  <div className="flex flex-col gap-7">
    <p className="text-body-sm text-darkAlpha-20">
      PlayMaker Score pozwala obserwować potencjał zawodnika. Na wskaźnik wpływa
      ponad 20 zmiennych, m.in. gra zawodnika, czy jego wiek.
    </p>
    <ExtendedScore score={63} trend="up" />
    <Chips chips={chips} />
    <div className="flex flex-col items-center">
      {/* graph section is temporary */}
      <Graph />
      <div className="flex items-center gap-6 pt-6 font-inter text-body-xs">
        <p className="flex items-center gap-3">
          <div className="h-[3px] w-4 rounded-full bg-primary" />
          Zawodnik
        </p>
        <p className="flex items-center gap-3">
          <div className="h-[3px] w-4 rounded-full bg-darkAlpha-20" />
          Średnia ligowa
        </p>
      </div>
    </div>
    <div className="flex justify-center">
      <Button text="Zobacz więcej" intent="secondary" size="small" />
    </div>
  </div>
)
