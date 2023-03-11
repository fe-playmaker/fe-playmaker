import { useGoToTab } from 'hooks/go-to-tab'
import { TProfileOverview } from 'types/profile'

import { Button } from '@/components/common/Button/Button'
import ArrowRightIcon from '@/icons/ArrowRightIcon.svg'

import CareerSeasonTable from '../../career/table/table'
import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'

const CareerSeasonSection = ({ career }: Pick<TProfileOverview, 'career'>) => {
  const { goToTab } = useGoToTab()

  return (
    <SectionContainer className="px-0 md:px-0 md:pt-8 md:pb-9" layout>
      <Heading
        className="ml-6 flex cursor-pointer items-center gap-2 md:ml-8 "
        onClick={() => goToTab(1)}
      >
        Sezon {career.season} <ArrowRightIcon className="icon-16" />
      </Heading>
      <CareerSeasonTable {...career} />
      <div className="mt-7 flex w-full justify-center">
        <Button
          intent="secondary"
          size="small"
          desktopSize="medium"
          text="Zobacz całą karierę"
          onClick={() => goToTab(1)}
        />
      </div>
    </SectionContainer>
  )
}

export default CareerSeasonSection
