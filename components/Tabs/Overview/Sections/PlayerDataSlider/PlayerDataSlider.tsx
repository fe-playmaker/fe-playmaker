'use client'

import './SliderDots.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  SliderItems,
  sliderSettings,
} from 'dummy-api/OverviewTab/playerDataSlider'
import Slider from 'react-slick'

import { SliderItem } from './SliderItem'

export const PlayerDataSlider = () => (
  <div className="pb-6">
    <Slider {...sliderSettings}>
      {SliderItems.map(item => (
        <SliderItem title={item.title} key={item.title} icon={item.icon} />
      ))}
    </Slider>
  </div>
)
