'use client'

import { useProfileCareer } from './hooks'
import SeasonPanel from './season-panel'

const ProfileCareer = () => {
  const { data, isLoading } = useProfileCareer('69')

  if (!data || isLoading) return <span>Loading</span>
  return (
    <div className="mt-4 flex flex-col gap-4 pb-11">
      {data.map(season => (
        <SeasonPanel {...season} />
      ))}
    </div>
  )
}

export default ProfileCareer
