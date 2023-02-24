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
          wideo,
          clearAccounts,
        },
        i,
      ) => (
        <TableRow
          expanded={!!wideo}
          className={clsx(
            'text-body-sm',
            i !== 0 && 'border-t border-darkAlpha-5',
          )}
        >
          <TableDataResult status={status} />
          <TableDataBadge value={minutes} minuteColon />
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

    <TableSummaryRow className="border-t-2 border-darkShade-5 text-body-sm">
      <span />
      <TableDataBadge value={total.minutes} minuteColon />
      {total.goals !== undefined && <TableSummaryValue value={total.goals} />}
      {total.clearAccounts !== undefined && (
        <TableSummaryValue value={total.clearAccounts} />
      )}
      <TableDataScore score={total.score} />
      <TableSummaryValue value={total.yellowCards} />
      <TableSummaryValue value={total.redCards} />
    </TableSummaryRow>

    <TableSummaryRow className="border-t border-darkShade-5 text-body-sm">
      <span />
      <TableDataBadge value={avgMatch.minutes} minuteColon />
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
