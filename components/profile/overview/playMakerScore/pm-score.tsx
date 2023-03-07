import { useGoToTab } from 'hooks/go-to-tab'
import { TProfilePMScore } from 'types/profile'

import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { PlayMakerScoreContent } from './content'

const PlayMakerScoreSection = ({
  score,
  lastScore,
}: Pick<TProfilePMScore, 'score' | 'lastScore'>) => {
  const { goToTab } = useGoToTab()

  return (
    <SectionContainer layout>
      <Heading
        className="flex cursor-pointer items-center gap-2"
        onClick={() => goToTab(3, 'playmaker score')}
      >
        PlayMaker Score <ArrowRightIcon className="icon-16" />
      </Heading>
      <PlayMakerScoreContent showedButton score={score} lastScore={lastScore} />
    </SectionContainer>
  )
}

export default PlayMakerScoreSection
