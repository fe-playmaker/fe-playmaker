import { cva } from 'class-variance-authority'
import { TProfileMatches } from 'types/profile'

import MatchTableIconLegend from './icon-legend'
import MatchesTable from './table/matches-table'

const seasonHeadingCva = cva(
  'text-heading-micro font-poppins font-bold ml-6 md:ml-8 pb-3',
  {
    variants: {
      season: {
        Wiosna: 'text-greenShade-50',
        Lato: '',
        Jesień: 'text-orangeShade-50',
        Zima: '',
      },
    },
  },
)

const MatchesPanel = (props: TProfileMatches) => {
  const { season, total } = props

  return (
    <div className="flex flex-col border-t border-darkShade-5 bg-white pb-4">
      <div className="pt-7 md:pt-9">
        <h4
          className={seasonHeadingCva({
            season: season.split(' ')[0] as any,
          })}
        >
          {season}
        </h4>
      </div>
      <MatchesTable {...props} />
      <MatchTableIconLegend
        goals={total.goals !== undefined}
        clearAccounts={total.clearAccounts !== undefined}
      />
    </div>
  )
}

export default MatchesPanel
