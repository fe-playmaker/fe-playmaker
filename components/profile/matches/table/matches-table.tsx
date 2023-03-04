import { TProfileMatches } from 'types/profile'

import { Table } from '@/components/common/Table'

import MatchesTableLeftPart from './left'
import MatchesTableRightPart from './right'

const MatchesTable = ({ avgMatch, matches, total }: TProfileMatches) => (
  <Table
    columnsClass="grid-cols-[2rem_2rem_2rem_3rem_2rem_2rem_6rem]"
    rowHeight="5.125rem"
    expandedRowHeight="7rem"
    summaryRowHeight="3.375rem"
  >
    <MatchesTableLeftPart matches={matches} />
    <MatchesTableRightPart data={{ avgMatch, total, matches }} />
  </Table>
)

export default MatchesTable
