'use client'

import 'styles/sliderDots.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import Slider from 'react-slick'
import { TProfileOverview } from 'types/profile'

import { sliderSettings } from '../helpers'

const SliderItem = ({ title, icon }: TProfileOverview['inShort'][number]) => (
  <div className="mx-auto flex w-[7rem] flex-col items-center gap-3 p-3 pb-5 ">
    <Image
      src={icon}
      alt="icon"
      width={64}
      height={64}
      className="h-8 w-auto"
    />

    <p className="text-center font-inter text-body-sm font-medium text-darkAlpha-40">
      {title}
    </p>
  </div>
)

export const PlayerSlider = ({
  inShort,
}: Pick<TProfileOverview, 'inShort'>) => (
  <div className="pb-6 md:pb-0">
    <Slider {...sliderSettings} className="slider">
      {inShort?.map(item => (
        <SliderItem key={item.title} {...item} />
      ))}
    </Slider>
  </div>
)
