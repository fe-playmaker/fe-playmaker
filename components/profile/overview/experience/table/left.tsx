import clsx from 'clsx'
import Image from 'next/image'
import { TProfileOverview } from 'types/profile'

import {
  TableHeaderText,
  TableLeftCell,
  TableLeftColumn,
  TableLeftHeaderCell,
  TableLeftSummaryCell,
  TableSummaryText,
} from '@/components/common/Table'

const ExperienceTableLeftPart = ({
  experience,
}: Pick<TProfileOverview, 'experience'>) => (
  <TableLeftColumn>
    <TableLeftHeaderCell>
      <TableHeaderText text="Klasa rozgrywkowa" className="pl-6 md:pl-8" />
    </TableLeftHeaderCell>
    {experience.data.map((row, i) => (
      <TableLeftCell
        key={`experience-left-${row.competetion}`}
        className={clsx(
          'relative flex w-[9rem] items-center pl-6 text-center font-medium md:w-[21.75rem] md:pl-8',
          i !== 0 && 'border-t border-darkAlpha-5',
        )}
      >
        <div className="flex items-center gap-3 justify-self-start text-left md:gap-5">
          <Image
            src={row.competitionLogoUrl}
            alt={row.competetion}
            width={48}
            height={48} // 19x24 24x32
            className="h-7 w-6 object-cover md:h-8 md:w-7"
          />

          <span className="text-body-sm text-darkAlpha-40">
            {row.competetion}
          </span>
        </div>
      </TableLeftCell>
    ))}
    <TableLeftSummaryCell className="border-t-2 border-darkShade-5 pl-6 md:pl-8">
      <TableSummaryText text="Łącznie" />
    </TableLeftSummaryCell>
  </TableLeftColumn>
)

export default ExperienceTableLeftPart
