import { TProfileOverview } from 'types/profile'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import ExperienceTable from './table/table'

export const ExperienceSection = (
  props: Pick<TProfileOverview, 'experience'>,
) => (
  <SectionContainer className="px-0 md:px-0" layout>
    <div className="font-inter font-bold text-dark">
      <Heading className="px-6 md:px-8">Doświadczenie</Heading>

      <ExperienceTable {...props} />
    </div>
  </SectionContainer>
)
