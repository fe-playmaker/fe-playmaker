import SendIcon from 'img/icons/Send.svg'
import React from 'react'

import Banner from '../banner'

interface IProps {
  expectations: string[]
  onMoreClick: () => void
}

const SearchingForClubBanner = ({ expectations, onMoreClick }: IProps) => (
  <Banner
    btnText="Napisz"
    btnIcon={<SendIcon />}
    btnSize="extraSmall"
    btnIntent="primary"
    accentClass="before:bg-tertiary"
    btnDesktopSize="small"
  >
    <span className="text-body-md font-bold md:text-body-lg">Szukam klubu</span>
    <span className="truncate text-body-sm font-medium text-darkAlpha-40 md:text-body-md">
      Oczekiwania: {expectations.map(exp => exp.toLocaleLowerCase()).join(', ')}
    </span>
    <button
      type="button"
      className="text-left text-body-sm font-medium text-darkAlpha-40 underline md:text-body-md"
      onClick={onMoreClick}
    >
      Więcej
    </button>
  </Banner>
)

export default SearchingForClubBanner
