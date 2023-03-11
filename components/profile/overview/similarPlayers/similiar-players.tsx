import clsx from 'clsx'
import { useState } from 'react'
import { TProfileOverview } from 'types/profile'

import ArrowDownIcon from '@/icons/ArrowDown.svg'

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
    <SectionContainer layout className={clsx('px-0 md:px-0', className)}>
      <Heading layout className="pl-6 pb-4 md:pl-8 md:pb-5">
        Podobni zawodnicy
      </Heading>
      <SimilarPlayersContent
        showCount={showCount}
        similarPlayers={similarPlayers}
      />
      {similarPlayers.length > showCount && (
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 pt-6 text-label-sm text-darkAlpha-40 md:text-label-md"
            type="button"
            onClick={() => setShowCount(val => val + 3)}
          >
            Pokaż kolejnych <ArrowDownIcon className="icon-16" />
          </button>
        </div>
      )}
    </SectionContainer>
  )
}

export default SimiliarPlayersSection
