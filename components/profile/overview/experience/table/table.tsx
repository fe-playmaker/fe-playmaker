import { TProfileOverview } from 'types/profile'

import { Table } from '@/components/common/Table'

import ExperienceTableLeftPart from './left'
import ExperienceTableRightPart from './right'

const ExperienceTable = (props: Pick<TProfileOverview, 'experience'>) => (
  <Table
    columnsClass="grid-cols-[repeat(5,3rem)]"
    desktopColumnsClass="grid-cols-[repeat(5,4rem)_1fr]"
    rowHeight="4.25rem"
    desktopRowHeight="4.75rem"
    summaryRowHeight="3.375rem"
    desktopSummaryRowHeight="3.875rem"
    paddingRightColumnClass="pl-9"
  >
    <ExperienceTableLeftPart {...props} />
    <ExperienceTableRightPart {...props} />
  </Table>
)

export default ExperienceTable
