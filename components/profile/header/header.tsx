'use client'

import { TProfileHeader } from 'types/profile'

import HeaderContent from './header-content'

interface IProps {
  data: TProfileHeader
}

const ProfileHeader = ({ data }: IProps) => (
  <div className="relative z-20 mt-9 bg-white px-6 pb-6 md:mt-0 md:px-8 md:pt-8">
    <HeaderContent {...data} />
  </div>
)

export default ProfileHeader
