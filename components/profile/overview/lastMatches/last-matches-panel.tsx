import { IProfileMatchesSeason } from 'dummy-api/profile/matches'

import MatchTableIconLegend from '../../matches/icon-legend'
import MatchesTable from '../../matches/table/matches-table'

export const LastMatchesPanel = (props: IProfileMatchesSeason) => {
  const { total } = props

  return (
    <div className="flex flex-col bg-white pb-4">
      <MatchesTable {...props} />
      <MatchTableIconLegend
        goals={total.goals !== undefined}
        clearAccounts={total.clearAccounts !== undefined}
      />
    </div>
  )
}
