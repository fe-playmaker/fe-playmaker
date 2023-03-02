import { TProfileOverview } from 'types/profile'

import { Button } from '@/components/common/Button/Button'

import SeasonPanel from '../../career/season-panel'
import { SectionContainer } from '../../common/SectionContainer'

const CareerSeasonSection = ({ career }: Pick<TProfileOverview, 'career'>) => (
  <SectionContainer className="px-0 pt-0 md:px-0 md:pb-9" layout>
    <SeasonPanel {...career} />

    <div className="flex w-full justify-center">
      <Button intent="secondary" size="small" text="Zobacz całą karierę" />
    </div>
  </SectionContainer>
)

export default CareerSeasonSection
