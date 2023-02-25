import { TProfileOverview } from 'types/profile'

import ExperienceTable from './experience-table'

export const ExperiencePanel = ({
  data,
  total,
}: TProfileOverview['experience']) => (
  <div className="font-inter font-bold text-dark">
    <h4 className="px-6 pb-4 font-poppins text-heading-xs">Doświadczenie</h4>

    <ExperienceTable data={data} total={total} />
  </div>
)
