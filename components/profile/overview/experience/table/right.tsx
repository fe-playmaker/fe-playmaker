import clsx from 'clsx'
import { TProfileOverview } from 'types/profile'

import {
  TableDataValue,
  TableHeaderRow,
  TableHeaderText,
  TableRightColumn,
  TableRow,
  TableSummaryRow,
  TableSummaryValue,
} from '@/components/common/Table'

const ExperienceTableRightPart = ({
  experience: { data, total },
}: Pick<TProfileOverview, 'experience'>) => (
  <TableRightColumn>
    <TableHeaderRow className="text-center">
      <TableHeaderText text="Sezony" />
      <TableHeaderText text="Mecze" />
      <TableHeaderText text="Bramki" />
      <TableHeaderText text="Śr. bramek" />
      <TableHeaderText text="Śr. minut" />
    </TableHeaderRow>

    {data.map((row, i) => (
      <TableRow
        className={clsx(
          'h-[4.25rem]',
          i !== 0 && 'border-t border-darkAlpha-5',
        )}
        key={`experience-right-${row.competetion}`}
      >
        <TableDataValue value={row.seasons} />
        <TableDataValue value={row.matches} />
        <TableDataValue value={row.goals} />
        <TableDataValue value={row.avgGoals}>’</TableDataValue>
        <TableDataValue value={row.avgMinutes}>’</TableDataValue>
      </TableRow>
    ))}
    <TableSummaryRow className="border-t-2 border-darkShade-5">
      <TableSummaryValue value={total.seasons} />
      <TableSummaryValue value={total.matches} />
      <TableSummaryValue value={total.goals} />
      <TableSummaryValue value={total.avgGoals}>’</TableSummaryValue>
      <TableSummaryValue value={total.avgMinutes}>’</TableSummaryValue>
    </TableSummaryRow>
  </TableRightColumn>
)

export default ExperienceTableRightPart
