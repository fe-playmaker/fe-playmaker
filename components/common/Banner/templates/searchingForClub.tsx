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
    btnIntent="primary"
    accentClass="before:bg-tertiary"
  >
    <span className="text-body-md font-bold">Szukam klubu</span>
    <span className="truncate text-body-sm font-medium text-darkAlpha-40">
      Oczekiwania: {expectations.join(', ')}
    </span>
    <span className="text-body-sm font-medium text-darkAlpha-40 underline">
      Więcej
    </span>
  </Banner>
)

export default SearchingForClubBanner
