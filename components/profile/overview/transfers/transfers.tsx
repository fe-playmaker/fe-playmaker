import { useState } from 'react'
import { TProfileOverview } from 'types/profile'

import ArrowDownIcon from '@/icons/ArrowDown.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { TransfersContent } from './content'

const TransfersSection = ({
  transfers,
}: Pick<TProfileOverview, 'transfers'>) => {
  const [showCount, setShowCount] = useState(3)

  return (
    <SectionContainer layout>
      <Heading layout>Transfery</Heading>
      <TransfersContent transfers={transfers} showCount={showCount} />
      {transfers.length > showCount && (
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 pt-6 text-label-sm text-darkAlpha-40 md:text-label-md"
            type="button"
            onClick={() => setShowCount(val => val + 3)}
          >
            Pokaż kolejne <ArrowDownIcon className="icon-16" />
          </button>
        </div>
      )}
    </SectionContainer>
  )
}
export default TransfersSection
