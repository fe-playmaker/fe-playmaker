import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

import TabLoadingSpinner from '../common/tab-loader/spinner'
import { TabContentWrapper } from '../common/tab-loader/tab-wrapper'
import PMScoreComparison from './comparison/comparison'
import PMScoreEvents from './events/events'
import PMScoreGraphSection from './graph/graph'
import { useProfilePMScore } from './hooks'

const ProfilePMScore = () => {
  const { data, isLoading } = useProfilePMScore('96')

  return (
    <AnimatePresence mode="wait">
      {isLoading || !data ? (
        <TabLoadingSpinner key="pmscore-spinner" />
      ) : (
        <TabContentWrapper className="mt-4 pb-9" key="pmscore-content">
          <LayoutGroup>
            <motion.div layout className="flex flex-col gap-4">
              <PMScoreGraphSection {...data} />
              <PMScoreEvents events={data.events} />
              <PMScoreComparison
                comparisonPercentage={data.comparisonPercentage}
              />
            </motion.div>
          </LayoutGroup>
        </TabContentWrapper>
      )}
    </AnimatePresence>
  )
}
export default ProfilePMScore
