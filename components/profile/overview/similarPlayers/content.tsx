import { motion } from 'framer-motion'
import { TProfileOverview } from 'types/profile'

import { Avatar } from '@/components/common/Avatar/Avatar'
import { AdditionalScore } from '@/components/common/Score/AdditionalPMScore'

interface IProps extends Pick<TProfileOverview, 'similarPlayers'> {
  showCount: number
}

export const SimilarPlayersContent = ({
  similarPlayers,
  showCount,
}: IProps) => (
  <div className="overflow-hidden">
    {similarPlayers.slice(0, showCount).map(d => (
      <motion.div
        className="md:mx-8 mx-6 flex items-center justify-between border-b border-darkAlpha-5 py-5 last-of-type:border-b-transparent"
        key={`similiar-player-${d.id}`}
        layout
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center">
            <Avatar
              type={d.premium ? 'premium' : 'default'}
              alt={d.name}
              src={d.avatarUrl}
              size="other"
            />
          </div>
          <div className="p-2 font-inter">
            <p className="text-subHeading-md font-semibold text-dark">
              {d.name}
            </p>
            <p className="md:text-body-sm w-[12.5rem] text-body-xs text-darkAlpha-40">{`${d.position} w ${d.team} (${d.competition}), ${d.age} lat`}</p>
          </div>
        </div>
        <AdditionalScore score={d.score.value} trend={d.score.trend} />
      </motion.div>
    ))}
  </div>
)
