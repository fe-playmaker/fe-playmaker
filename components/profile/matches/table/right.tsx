import clsx from 'clsx'
import { TProfileMatches } from 'types/profile'

import {
  TableDataBadge,
  TableDataResult,
  TableDataScore,
  TableDataValue,
  TableHeaderRedCard,
  TableHeaderRow,
  TableHeaderText,
  TableHeaderYellowCard,
  TableRightColumn,
  TableRow,
  TableSummaryRow,
  TableSummaryValue,
} from '@/components/common/Table'
import BallIcon from '@/icons/Ball.svg'
import ClockIcon from '@/icons/ClockVariant.svg'
import GraphIcon from '@/icons/Graph.svg'
import ShieldIcon from '@/icons/ShieldPerfect.svg'
import WhistleIcon from '@/icons/Whistle.svg'

interface IProps {
  data: Pick<TProfileMatches, 'avgMatch' | 'matches' | 'total'>
}

const MatchesTableRightPart = ({
  data: { avgMatch, matches, total },
}: IProps) => (
  <TableRightColumn>
    <TableHeaderRow>
      <WhistleIcon className="fill-darkAlpha-40 icon-16" />
      <ClockIcon className="fill-darkAlpha-40 icon-16 " />
      {total.goals !== undefined && (
        <BallIcon className="fill-darkAlpha-40 icon-16 " />
      )}
      {total.clearAccounts !== undefined && <ShieldIcon className="icon-16 " />}
      <GraphIcon className="fill-darkAlpha-40 icon-16 " />
      <TableHeaderYellowCard />
      <TableHeaderRedCard />
      <TableHeaderText text="Dodatkowe" className="justify-self-end" />
    </TableHeaderRow>

    {matches.map(
      (
        {
          additional,
          goals,
          minutes,
          redCards,
          status,
          yellowCards,
          score,
          wideoUrl,
          clearAccounts,
          id,
        },
        i,
      ) => (
        <TableRow
          key={`right-matches-table-row-${id}`}
          expanded={!!wideoUrl}
          className={clsx(
            'text-body-sm md:text-body-md',
            i !== 0 && 'border-t border-darkAlpha-5',
            wideoUrl
              ? 'h-[7.188rem] md:h-[8.438rem]'
              : 'h-[5.313rem] md:h-[6.563rem]',
          )}
        >
          <TableDataResult status={status} />
          <TableDataBadge
            className="md:text-body-sm"
            value={minutes}
            minuteColon
          />
          {goals !== undefined && <TableDataValue value={goals} />}
          {clearAccounts !== undefined && (
            <TableDataValue value={clearAccounts} />
          )}
          <TableDataScore score={score} />
          <TableDataValue value={yellowCards} />
          <TableDataValue value={redCards} />
          {additional && (
            <TableDataBadge value={additional} className="justify-self-end" />
          )}
        </TableRow>
      ),
    )}

    <TableSummaryRow className="border-t-2 border-darkShade-5 text-body-sm md:text-body-md">
      <span />
      <TableDataBadge
        className="md:text-body-sm"
        value={total.minutes}
        minuteColon
      />
      {total.goals !== undefined && <TableSummaryValue value={total.goals} />}
      {total.clearAccounts !== undefined && (
        <TableSummaryValue value={total.clearAccounts} />
      )}
      <TableDataScore score={total.score} />
      <TableSummaryValue value={total.yellowCards} />
      <TableSummaryValue value={total.redCards} />
    </TableSummaryRow>

    <TableSummaryRow className="border-t border-darkShade-5 text-body-sm md:text-body-md">
      <span />
      <TableDataBadge
        className="md:text-body-sm"
        value={avgMatch.minutes}
        minuteColon
      />
      {avgMatch.goals !== undefined && (
        <TableSummaryValue value={avgMatch.goals} />
      )}
      {avgMatch.clearAccounts !== undefined && (
        <TableSummaryValue value={avgMatch.clearAccounts} />
      )}
      <TableDataScore score={avgMatch.score} />
      <TableSummaryValue value={avgMatch.yellowCards} />
      <TableSummaryValue value={avgMatch.redCards} />
    </TableSummaryRow>
  </TableRightColumn>
)

export default MatchesTableRightPart
