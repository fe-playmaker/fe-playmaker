import { useState } from 'react'
import { TProfileMatches } from 'types/profile'

import MatchesTableLeftPart from './left'
import MatchesTableRightPart from './right'

const MatchesTable = ({ avgMatch, matches, total }: TProfileMatches) => {
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
