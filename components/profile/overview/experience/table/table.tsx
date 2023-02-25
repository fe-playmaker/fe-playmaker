import { TProfileOverview } from 'types/profile'

import { Table } from '@/components/common/Table'

import ExperienceTableLeftPart from './left'
import ExperienceTableRightPart from './right'

const ExperienceTable = (props: Pick<TProfileOverview, 'experience'>) => (
  <Table
    columnsClass="grid-cols-[repeat(5,3rem)]"
    rowHeight="4.8rem"
    summaryRowHeight="3.375rem"
    paddingRightColumnClass="pl-9"
  >
    <ExperienceTableLeftPart {...props} />
    <ExperienceTableRightPart {...props} />
  </Table>
)

export default ExperienceTable
