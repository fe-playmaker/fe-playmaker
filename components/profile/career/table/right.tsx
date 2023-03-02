import clsx from 'clsx'
// import { useContext } from 'react'
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
// import { TableSettingsContext } from '@/components/common/Table/settings-context'
import HelpCircleIcon from '@/icons/HelpCircle.svg'

// import { addRem } from '../helpers'

const CareerTableRightPart = ({
  data,
  total,
  season,
}: Pick<TProfileCareer, 'data' | 'total' | 'season'>) => (
  // const { rowHeight } = useContext(TableSettingsContext)

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
        className={clsx(
          'h-[6.313rem]',
          i !== 0 && 'border-t border-darkAlpha-5',
        )}
        key={`right-${row.team}-${season}`}
        // customHeight={`calc(${rowHeight} ${addRem(row.mainTeam)} ${addRem(
        //   !!row.season,
        // )})`}
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
