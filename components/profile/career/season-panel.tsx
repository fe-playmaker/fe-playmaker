import { TProfileCareer } from 'types/profile'

import { Heading } from '../common/Heading'
import CareerSeasonTable from './table/table'

const SeasonPanel = ({ data, season, total }: TProfileCareer) => (
  <div className="bg-white pt-8 pb-6 font-inter font-bold text-dark">
    <Heading className="px-6 md:px-8">Sezon {season}</Heading>

    <CareerSeasonTable data={data} season={season} total={total} />
  </div>
)

export default SeasonPanel
