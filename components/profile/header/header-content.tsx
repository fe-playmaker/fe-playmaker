'use client'

import TimeAgo from 'javascript-time-ago'
import pl from 'javascript-time-ago/locale/pl'
import { useState } from 'react'
import { TProfileHeader } from 'types/profile'

import { Avatar } from '@/components/common/Avatar/Avatar'
import SearchingForClubBanner from '@/components/common/Banner/templates/searchingForClub'
import { PlayMakerScore } from '@/components/common/Score/PlayMakerScore'

import SearchingForClubModal from './searching-for-club-modal'

TimeAgo.addDefaultLocale(pl)
const timeAgo = new TimeAgo('pl-PL')

const HeaderContent = ({
  age,
  avatarUrl,
  status,
  competition,
  firstName,
  lastActivity,
  lastName,
  position,
  premium,
  score,
  team,
}: TProfileHeader) => {
  const [showSFClubModal, setShowSFClubModal] = useState(false)

  return (
    <>
      <div className="flex justify-between pb-5">
        <div className="-mt-9 flex flex-col items-start">
          <Avatar
            src={avatarUrl}
            alt={`${firstName} ${lastName}`}
            size="profile"
            type={premium ? 'premium' : 'border'}
          />
          <h1 className="mt-5 text-heading-smaller font-bold text-dark">
            {firstName} {lastName}
          </h1>
          <h2 className="mt-2 font-inter text-body-sm font-medium text-darkAlpha-40">
            {age} lat, {position}
          </h2>
          <h2 className="font-inter text-body-sm font-medium text-darkAlpha-40">
            {team}, ({competition})
          </h2>
        </div>
        <div className="flex flex-col items-end gap-6 pt-4">
          {premium && (
            <div className="px-3 py-2 font-inter text-body-sm font-bold text-[#553E02] premium-badge-bg">
              Premium
            </div>
          )}
          <PlayMakerScore score={score.value} trend={score.trend} />
        </div>
      </div>
      <span className="block border-t border-darkShade-1 py-5 font-inter text-body-xs text-darkAlpha-20">
        {lastActivity
          ? `Ostatnia aktywność: ${timeAgo.format(new Date(lastActivity))}`
          : 'Brak aktywności na portalu'}
      </span>
      {status?.searchingForClub && (
        <>
          <SearchingForClubBanner
            expectations={status.searchingForClub.expectations}
            onMoreClick={() => setShowSFClubModal(true)}
          />
          <SearchingForClubModal
            open={showSFClubModal}
            closeModal={() => setShowSFClubModal(false)}
            status={status}
          />
        </>
      )}
    </>
  )
}

export default HeaderContent
