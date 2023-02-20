import { TProfileCareer } from 'types/profile'

import HelpCircleIcon from '@/icons/HelpCircle.svg'
import TrendDownIcon from '@/icons/TrendDown.svg'
import TrendUpIcon from '@/icons/Trendup.svg'

import SeasonTable from './season-table'

const SeasonPanel = ({ data, score, season, total }: TProfileCareer) => (
  <div className="bg-white py-8 font-inter font-bold text-dark">
    <div className="flex justify-between px-6 pb-4">
      <h4 className="font-poppins text-heading-xs">Sezon {season}</h4>
      <div className="flex items-center gap-2">
        {score.trend === 'up' ? (
          <TrendUpIcon className="icon-16" />
        ) : (
          <TrendDownIcon className="icon-16" />
        )}
        <span
          className={`text-body-sm font-bold ${
            score.trend === 'up' ? 'text-greenShade-50' : 'text-orangeShade-50'
          }`}
        >
          {score.value}
        </span>
        <HelpCircleIcon className="w-[0.875rem]" />
      </div>
    </div>
    <SeasonTable data={data} season={season} total={total} />
  </div>
)

export default SeasonPanel
