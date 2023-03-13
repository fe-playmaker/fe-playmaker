import clsx from 'clsx'
import { useState } from 'react'
import { TProfileOverview } from 'types/profile'

import { ShowMoreButton } from '@/components/common/ShowMoreButton/show-more-button'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { SimilarPlayersContent } from './content'

type SimilarPlayers = Pick<TProfileOverview, 'similarPlayers'>

interface IProps extends SimilarPlayers {
  className?: string
}

const SimiliarPlayersSection = ({ similarPlayers, className }: IProps) => {
  const [showCount, setShowCount] = useState(3)

  return (
    <SectionContainer
      layout
      className={clsx('px-0 md:px-0 md:pb-6', className)}
    >
      <Heading layout className="pl-6 pb-4 md:pl-8 md:pb-5">
        Podobni zawodnicy
      </Heading>
      <SimilarPlayersContent
        showCount={showCount}
        similarPlayers={similarPlayers}
      />
      {similarPlayers.length > showCount && (
        <ShowMoreButton setShowCount={setShowCount} />
      )}
    </SectionContainer>
  )
}

export default SimiliarPlayersSection
