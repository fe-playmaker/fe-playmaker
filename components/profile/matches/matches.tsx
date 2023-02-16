import { useProfileMatches } from './hooks'
import MatchesPanel from './matches-panel'

const ProfileMatches = () => {
  const { data, isLoading } = useProfileMatches('96')

  if (isLoading || !data) return <span>Loading</span>
  return (
    <div>
      {data.map(season => (
        <MatchesPanel {...season} key={season.season} />
      ))}
    </div>
  )
}

export default ProfileMatches
