import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

import { TableEmptyCell } from './empty'

interface IProps {
  score:
    | {
        trend: 'up' | 'down'
        value: number
      }
    | undefined
}

export const TableDataScore = ({ score }: IProps) =>
  score ? (
    <span
      className={`flex items-center gap-1 font-inter text-body-sm font-bold ${
        score.trend === 'up' ? 'text-greenShade-50' : 'text-orangeShade-50'
      }`}
    >
      {score.trend === 'up' ? (
        <TrendUpIcon className="icon-12" />
      ) : (
        <TrendDownIcon className="icon-12" />
      )}
      {score.value}
    </span>
  ) : (
    <TableEmptyCell />
  )

export default TableDataScore
