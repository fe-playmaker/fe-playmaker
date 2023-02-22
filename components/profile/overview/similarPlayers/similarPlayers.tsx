import { IProfileOverviewData } from 'dummy-api/profile/overview'

import { Avatar } from '@/components/common/Avatar/Avatar'
import { AdditionalScore } from '@/components/common/Score/AdditionalPMScore'

export const SimilarPlayers = ({
  similarPlayers,
}: Pick<IProfileOverviewData, 'similarPlayers'>) => (
  <div>
    {similarPlayers.map(d => (
      <div className="flex items-center justify-between border-b border-darkAlpha-5 py-5 last-of-type:border-b-transparent">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center">
            <Avatar
              type={d.premium ? 'premium' : 'default'}
              alt={d.name}
              src={d.image}
              size="other"
            />
          </div>
          <div className="p-2 font-inter">
            <p className="text-subHeading-md font-semibold text-dark">
              {d.name}
            </p>
            <p className="w-[12.5rem] text-body-xs text-darkAlpha-40">{`${d.carrer}, ${d.age} lat`}</p>
          </div>
        </div>
        <AdditionalScore score={d.score} trend={d.trend} />
      </div>
    ))}
  </div>
)
