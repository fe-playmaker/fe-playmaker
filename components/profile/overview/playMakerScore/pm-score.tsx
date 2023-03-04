import { useGoToTab } from 'hooks/go-to-tab'
import { TProfileOverviewPMScore } from 'types/profile'

import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { PlayMakerScoreContent } from './content'

const PlayMakerScoreSection = ({
  pmScore,
}: {
  pmScore: TProfileOverviewPMScore
}) => {
  const { goToTab } = useGoToTab()

  return (
    <SectionContainer layout>
      <Heading
        className="flex cursor-pointer items-center gap-2"
        onClick={() => goToTab(3)}
      >
        PlayMaker Score <ArrowRightIcon className="icon-16" />
      </Heading>
      <PlayMakerScoreContent pmScore={pmScore} />
    </SectionContainer>
  )
}

export default PlayMakerScoreSection
