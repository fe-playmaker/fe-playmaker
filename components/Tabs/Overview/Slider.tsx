import Image from 'next/image'
import type { ReactElement } from 'react'

import SecondLeagueIcon from '@/icons/SecondLeague.png'
import StrippedShirtIcon from '@/icons/StrippedShirt.svg'
import TrednUpIcon from '@/icons/Trendup.svg'

const SliderItems = [
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
]

interface SliderProps {
  title: string
  icon: ReactElement
}

const SliderItem = ({ title, icon }: SliderProps) => (
  <div className="flex flex-col items-center gap-3">
    {icon}

    <p className="text-center font-inter text-body-sm font-medium text-darkAlpha-40">
      {title}
    </p>
  </div>
)

export const Slider = () => (
  <div className="flex w-full flex-col items-center gap-7">
    <div className="grid grid-cols-3">
      {SliderItems.map(item => (
        <SliderItem title={item.title} key={item.title} icon={item.icon} />
      ))}
    </div>

    <div className="flex items-center gap-3">
      <span className="h-3 w-3 cursor-pointer rounded-[50%] bg-primary" />

      <span className="h-3 w-3 cursor-pointer rounded-[50%] shadow-[inset_0px_0px_0px_1px] shadow-dark/20" />
    </div>
  </div>
)
