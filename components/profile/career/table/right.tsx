import clsx from 'clsx'
import { TProfileCareer } from 'types/profile'

import {
  TableDataValue,
  TableHeaderRow,
  TableHeaderText,
  TableRightColumn,
  TableRow,
  TableSummaryRow,
  TableSummaryValue,
} from '@/components/common/Table'
import HelpCircleIcon from '@/icons/HelpCircle.svg'

import { addHeight } from '../helpers'

const CareerTableRightPart = ({
  data,
  total,
  season,
}: Pick<TProfileCareer, 'data' | 'total' | 'season'>) => (
  <TableRightColumn>
    <TableHeaderRow className="text-center">
      <TableHeaderText text="Mecze" />
      <TableHeaderText text="Bramki" />
      <TableHeaderText text="Śr. bramek" />
      <TableHeaderText text="Śr. minut" />
      <TableHeaderText text="Łącznie minut" />
    </TableHeaderRow>

    {data.map((row, i) => (
      <TableRow
        className={clsx(i !== 0 && 'border-t border-darkAlpha-5')}
        key={`right-${row.team}-${season}`}
        addHeight={addHeight(row.mainTeam, !!row.season)}
      >
        <TableDataValue
          value={row.matches}
          className="flex items-center justify-center gap-2"
        >
          <HelpCircleIcon className="icon-12" />
        </TableDataValue>
        <TableDataValue value={row.goals} />
        <TableDataValue value={row.avgGoals} />
        <TableDataValue value={row.avgMinutes}>’</TableDataValue>
        <TableDataValue value={row.totalMinutes}>’</TableDataValue>
      </TableRow>
    ))}
    <TableSummaryRow className="border-t-2 border-darkShade-5">
      <TableSummaryValue value={total.matches} />
      <TableSummaryValue value={total.goals} />
      <TableSummaryValue value={total.avgGoals} />
      <TableSummaryValue value={total.avgMinutes}>’</TableSummaryValue>
      <TableSummaryValue value={total.totalMinutes}>’</TableSummaryValue>
    </TableSummaryRow>
  </TableRightColumn>
)

export default CareerTableRightPart
