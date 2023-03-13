import { useState } from 'react'
import { TProfileOverview } from 'types/profile'

import { ShowMoreButton } from '@/components/common/ShowMoreButton/show-more-button'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { TransfersContent } from './content'

const TransfersSection = ({
  transfers,
}: Pick<TProfileOverview, 'transfers'>) => {
  const [showCount, setShowCount] = useState(3)

  return (
    <SectionContainer className="md:pb-6" layout>
      <Heading layout>Transfery</Heading>
      <TransfersContent transfers={transfers} showCount={showCount} />
      {transfers.length > showCount && (
        <ShowMoreButton setShowCount={setShowCount} />
      )}
    </SectionContainer>
  )
}
export default TransfersSection
