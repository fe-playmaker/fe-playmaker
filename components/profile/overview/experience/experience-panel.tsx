import { IProfileExperienceData } from 'dummy-api/profile/experience'

import ExperienceTable from './experience-table'

export const ExperiencePanel = ({ data, total }: IProfileExperienceData) => (
  <div className="font-inter font-bold text-dark">
    <h4 className="px-6 pb-4 font-poppins text-heading-xs">Doświadczenie</h4>

    <ExperienceTable data={data} total={total} />
  </div>
)
