import { TProfileMatches } from 'types/profile'

import { Table } from '@/components/common/Table'

import MatchesTableLeftPart from './left'
import MatchesTableRightPart from './right'

const MatchesTable = ({ avgMatch, matches, total }: TProfileMatches) => (
  <Table
    columnsClass="grid-cols-[2rem_2rem_2rem_3rem_2rem_2rem_6rem]"
    desktopColumnsClass="grid-cols-[3rem_3rem_3rem_3.5rem_3rem_3rem_6rem_1fr]"
    rowHeight="5.313rem"
    desktopRowHeight="6.875rem"
    expandedRowHeight="7.188rem"
    desktopExpandedRowHeight="9.625rem"
    summaryRowHeight="3.125rem"
    desktopSummaryRowHeight="3.875rem"
  >
    <MatchesTableLeftPart matches={matches} />
    <MatchesTableRightPart data={{ avgMatch, total, matches }} />
  </Table>
)

export default MatchesTable
