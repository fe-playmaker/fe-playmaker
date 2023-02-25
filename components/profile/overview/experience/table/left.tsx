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
      <TableHeaderText text="Klasa rozgrywkowa" className="pl-6" />
    </TableLeftHeaderCell>
    {experience.data.map((row, i) => (
      <TableLeftCell
        key={`experience-left-${row.competetion}`}
        className={clsx(
          'relative flex w-[9rem] items-center pl-6 text-center font-medium',
          i !== 0 && 'border-t border-darkAlpha-5',
        )}
      >
        <div className="flex items-center gap-3 justify-self-start text-left">
          <Image
            src={row.competitionLogoUrl}
            alt={row.competetion}
            width={48}
            height={48}
            className="h-7 w-auto max-w-[19px] object-cover"
          />

          <span className="text-body-sm text-darkAlpha-40">
            {row.competetion}
          </span>
        </div>
      </TableLeftCell>
    ))}
    <TableLeftSummaryCell className="border-t-2 border-darkShade-5 pl-6">
      <TableSummaryText text="Łącznie" />
    </TableLeftSummaryCell>
  </TableLeftColumn>
)

export default ExperienceTableLeftPart
