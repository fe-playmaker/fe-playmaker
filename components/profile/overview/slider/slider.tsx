'use client'

import 'styles/sliderDots.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import type { ReactElement } from 'react'
import Slider from 'react-slick'

import { SliderItems, sliderSettings } from '../helpers'

interface SliderProps {
  title: string
  icon: ReactElement
}

export const SliderItem = ({ title, icon }: SliderProps) => (
  <div className="flex w-[7rem] flex-col items-center gap-3 p-3 pb-5">
    {icon}

    <p className="text-center font-inter text-body-sm font-medium text-darkAlpha-40">
      {title}
    </p>
  </div>
)

export const PlayerSlider = () => (
  <div className="pb-6">
    <Slider {...sliderSettings}>
      {SliderItems.map(item => (
        <SliderItem {...item} />
      ))}
    </Slider>
  </div>
)
