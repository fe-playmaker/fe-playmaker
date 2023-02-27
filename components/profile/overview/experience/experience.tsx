import { TProfileOverview } from 'types/profile'

import { SectionContainer } from '../../common/SectionContainer'
import ExperienceTable from './table/table'

export const ExperienceSection = (
  props: Pick<TProfileOverview, 'experience'>,
) => (
  <SectionContainer className="px-0" layout>
    <div className="font-inter font-bold text-dark">
      <h4 className="px-6 pb-4 font-poppins text-heading-xs">Doświadczenie</h4>

      <ExperienceTable {...props} />
    </div>
  </SectionContainer>
)
