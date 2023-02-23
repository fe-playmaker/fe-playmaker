'use client'

import 'styles/sliderDots.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { IProfileOverviewData } from 'dummy-api/profile/overview'
import Image from 'next/image'
import Slider from 'react-slick'

import { sliderSettings } from '../helpers'

const SliderItem = ({
  title,
  icon,
}: IProfileOverviewData['inShort'][number]) => (
  <div className="flex w-[7rem] flex-col items-center gap-3 p-3 pb-5">
    <Image src={icon} alt="icon" width={32} height={32} />

    <p className="text-center font-inter text-body-sm font-medium text-darkAlpha-40">
      {title}
    </p>
  </div>
)

export const PlayerSlider = ({
  inShort,
}: Pick<IProfileOverviewData, 'inShort'>) => (
  <div className="pb-6">
    <Slider {...sliderSettings}>
      {inShort?.map(item => (
        <SliderItem key={item.title} {...item} />
      ))}
    </Slider>
  </div>
)
