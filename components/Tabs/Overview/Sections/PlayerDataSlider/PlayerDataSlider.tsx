'use client'

import './SliderDots.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import Slider from 'react-slick'

import SecondLeagueIcon from '@/icons/SecondLeague.png'
import StrippedShirtIcon from '@/icons/StrippedShirt.svg'
import ThirdLeagueIcon from '@/icons/ThirdLeague.png'
import TrednUpIcon from '@/icons/Trendup.svg'

import { SliderItem } from './SliderItem'

export const SliderItems = [
  {
    icon: <TrednUpIcon className="h-8 w-8" />,
    title: 'Dobra Forma',
  },
  {
    icon: <StrippedShirtIcon className="h-8 w-8" />,
    title: 'Kluczowy zawodnik w Pogoni Siedlce',
  },
  {
    icon: (
      <Image width={32} height={32} src={SecondLeagueIcon} alt="druga liga" />
    ),
    title: '1 sezon w 3 lidze',
  },
  {
    icon: (
      <Image width={32} height={32} src={ThirdLeagueIcon} alt="trzecia liga" />
    ),
    title: '2 sezon w 4 lidze',
  },
]

export const sliderSettings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  speed: 500,
  arrows: false,
}

export const PlayerDataSlider = () => (
  <div className="pb-6">
    <Slider {...sliderSettings}>
      {SliderItems.map(item => (
        <SliderItem title={item.title} key={item.title} icon={item.icon} />
      ))}
    </Slider>
  </div>
)
