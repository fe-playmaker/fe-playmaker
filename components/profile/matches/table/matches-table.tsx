import { IProfileMatchesSeason } from 'dummy-api/profile/matches'
import { useState } from 'react'

import MatchesTableLeftPart from './left'
import MatchesTableRightPart from './right'

const MatchesTable = ({ avgMatch, matches, total }: IProfileMatchesSeason) => {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <div className="grid grid-cols-[max-content_1fr] font-inter [&>*]:font-medium">
      <MatchesTableLeftPart matches={matches} isScrolled={isScrolled} />
      <MatchesTableRightPart
        data={{ avgMatch, total, matches }}
        setIsScrolled={value => setIsScrolled(value)}
      />
    </div>
  )
}

export default MatchesTable
