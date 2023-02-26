import { TProfileOverview } from 'types/profile'

import ArrowDownIcon from '@/icons/ArrowDown.svg'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import { TransfersContent } from './content'

const TransfersSection = (props: Pick<TProfileOverview, 'transfers'>) => (
  <SectionContainer>
    <Heading>Transfery</Heading>
    <TransfersContent {...props} />
    <div className="flex justify-center">
      <p className="flex items-center gap-2 pt-6 text-label-sm text-darkAlpha-40">
        Pokaż kolejne <ArrowDownIcon className="icon-16" />
      </p>
    </div>
  </SectionContainer>
)
export default TransfersSection
