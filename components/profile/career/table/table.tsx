import { TProfileCareer } from 'types/profile'

import { Table } from '@/components/common/Table'

import CareerTableLeftPart from './left'
import CareerTableRightPart from './right'

const CareerSeasonTable = (
  props: Pick<TProfileCareer, 'data' | 'total' | 'season'>,
) => (
  <Table
    columnsClass="grid-cols-[repeat(5,3rem)]"
    desktopColumnsClass="grid-cols-[repeat(5,4rem)_1fr]"
    rowHeight="4.8rem"
    summaryRowHeight="3.375rem"
  >
    <CareerTableLeftPart {...props} />
    <CareerTableRightPart {...props} />
  </Table>
)

export default CareerSeasonTable
