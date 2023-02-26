import Graph from 'img/illustrations/Graph.svg'
import { TProfilePMScore } from 'types/profile'

import { Chips } from '@/components/common/Chips/Chips'
import { ExtendedScore } from '@/components/common/Score/ExtendedPMScore'
import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'

const chips = [
  'Ostatnie 5 meczów',
  'Ostatnia runda',
  'Ostatni sezon',
  'Ostatnie 2 lata',
  'Ostatnie 3 lata',
]

const PMScoreGraphSection = ({ score, lastScore }: TProfilePMScore) => (
  <SectionContainer layout>
    <Heading className="flex items-center gap-2">
      PlayMaker Score <ArrowRightIcon className="icon-16" />
    </Heading>
    <div className="flex flex-col gap-7">
      <p className="text-body-sm text-darkAlpha-20">
        PlayMaker Score pozwala obserwować potencjał zawodnika. Na wskaźnik
        wpływa ponad 20 zmiennych, m.in. gra zawodnika, czy jego wiek.
      </p>
      <ExtendedScore lastScore={lastScore} score={score} />
      <Chips chips={chips} />
      <div className="flex flex-col items-center">
        {/* graph section is temporary */}
        <Graph />
        <div className="flex items-center gap-6 pt-6 font-inter text-body-xs">
          <span className="flex items-center gap-3">
            <div className="h-[3px] w-4 rounded-full bg-primary" />
            Zawodnik
          </span>
          <span className="flex items-center gap-3">
            <div className="h-[3px] w-4 rounded-full bg-darkAlpha-20" />
            Średnia ligowa
          </span>
        </div>
      </div>
    </div>
  </SectionContainer>
)

export default PMScoreGraphSection
