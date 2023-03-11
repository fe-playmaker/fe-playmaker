import SendIcon from 'img/icons/Send.svg'
import React from 'react'

import Banner from '../banner'

interface IProps {
  expectations: string[]
}

const SearchingForClubBanner = ({ expectations }: IProps) => (
  <Banner
    btnText="Napisz"
    btnIcon={<SendIcon />}
    btnSize="extraSmall"
    btnDesktopSize="small"
    btnIntent="primary"
    accentClass="before:bg-tertiary"
  >
    <span className="text-body-md font-bold md:text-body-lg">Szukam klubu</span>
    <span className="truncate text-body-sm font-medium text-darkAlpha-40 md:text-body-md">
      Oczekiwania: {expectations.join(', ')}
    </span>
    <span className="text-body-sm font-medium text-darkAlpha-40 underline md:text-body-md">
      Więcej
    </span>
  </Banner>
)

export default SearchingForClubBanner
