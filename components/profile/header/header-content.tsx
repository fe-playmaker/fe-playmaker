'use client'

import TimeAgo from 'javascript-time-ago'
import pl from 'javascript-time-ago/locale/pl'
import { useState } from 'react'
import { TProfileHeader } from 'types/profile'

import { Avatar } from '@/components/common/Avatar/Avatar'
import SearchingForClubBanner from '@/components/common/Banner/templates/searchingForClub'
import { PlayMakerScore } from '@/components/common/Score/PlayMakerScore'

import PremiumBadge from './premium-badge'
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
        <div className="-mt-9 flex flex-col items-start md:mt-0 md:flex-row md:items-end md:gap-7">
          <Avatar
            src={avatarUrl}
            alt={`${firstName} ${lastName}`}
            size="profile"
            type={premium ? 'premium' : 'border'}
          />
          <div className="md:flex md:flex-col md:gap-2">
            {premium && <PremiumBadge className="hidden self-start md:block" />}
            <h1 className="mt-5 text-heading-smaller font-bold text-dark md:mt-0 md:text-heading-md">
              {firstName} {lastName}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:gap-3 md:text-body-sm">
              <h2 className="mt-2 font-inter text-body-sm font-medium text-darkAlpha-40 md:mt-0">
                {age} lat, {position}
              </h2>
              <div className="hidden h-2 w-2 rounded-[50%] bg-darkAlpha-10 md:block" />
              <h2 className="font-inter text-body-sm font-medium text-darkAlpha-40">
                {team}, ({competition})
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-6 pt-4 md:flex-col-reverse md:pt-0">
          {premium && <PremiumBadge className="md:hidden" />}
          <PlayMakerScore score={score.value} trend={score.trend} />
        </div>
      </div>
      <span className="block border-t border-darkShade-1 py-5 font-inter text-body-xs text-darkAlpha-20 md:ml-[9rem] md:pb-8 md:text-body-sm">
        {lastActivity
          ? `Ostatnia aktywno????: ${timeAgo.format(new Date(lastActivity))}`
          : 'Brak aktywno??ci na portalu'}
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
