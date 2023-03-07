import { useGoToTab } from 'hooks/go-to-tab'
import Graph from 'img/illustrations/Graph.png'
import LargeGraph from 'img/illustrations/LargeGraph.png'
import Image from 'next/image'
import { TProfilePMScore } from 'types/profile'

import { Button } from '@/components/common/Button/Button'
import { Chips } from '@/components/common/Chips/Chips'
import { ExtendedScore } from '@/components/common/Score/ExtendedPMScore'

const chips = [
  'Ostatnie 5 meczów',
  'Ostatnia runda',
  'Ostatni sezon',
  'Ostatnie 2 lata',
  'Ostatnie 3 lata',
]

type PmScore = Pick<TProfilePMScore, 'score' | 'lastScore'>

interface IProps extends PmScore {
  showedButton?: boolean
}

export const PlayMakerScoreContent = ({
  score,
  lastScore,
  showedButton,
}: IProps) => {
  const { goToTab } = useGoToTab()

  return (
    <div className="flex flex-col gap-7 md:gap-8">
      <p className="text-body-sm text-darkAlpha-20 md:text-body-md">
        PlayMaker Score pozwala obserwować potencjał zawodnika. Na wskaźnik
        wpływa ponad 20 zmiennych, m.in. gra zawodnika, czy jego wiek.
      </p>
      <ExtendedScore lastScore={lastScore} score={score} />
      <Chips chips={chips} className="md:flex-wrap" />
      <div className="flex flex-col items-center">
        {/* graph section is temporary */}
        <Image src={Graph} alt="mock graph" className="block md:hidden" />
        <Image src={LargeGraph} alt="mock graph" className="hidden md:block" />
        <div className="flex items-center gap-6 pt-6 font-inter text-body-xs md:text-body-md">
          <span className="flex items-center gap-3">
            <div className="h-[3px] w-4 rounded-full bg-primary md:h-[4px]" />
            Zawodnik
          </span>
          <span className="flex items-center gap-3">
            <div className="h-[3px] w-4 rounded-full bg-darkAlpha-20 md:h-[4px]" />
            Średnia ligowa
          </span>
        </div>
      </div>
      {showedButton && (
        <div className="flex justify-center">
          <Button
            text="Zobacz więcej"
            intent="secondary"
            size="small"
            desktopSize="medium"
            onClick={() => goToTab(3)}
          />
        </div>
      )}
    </div>
  )
}
