'use client'

import { cva } from 'class-variance-authority'
import SoccerField from 'img/illustrations/SoccerField.svg'
import { TProfileOverview } from 'types/profile'

import HelperIcon from '@/icons/helperPosition.svg'
import StrikerIcon from '@/icons/strikerPosition.svg'

const singleDotCva = cva('h-3 w-3 md:w-[10px] md:h-[10px] rounded-[50%]', {
  variants: {
    type: {
      striker: 'bg-primary',
      helper: 'bg-darkShade-40',
    },
  },
})

export const PlayerBaseData = ({
  age,
  height,
  weight,
  location,
  position,
  altPosition,
  betterLeg,
}: TProfileOverview['playerData']) => {
  const baseData = [
    {
      title: 'Wiek',
      content: `${age} lat (1992)`,
    },
    {
      title: 'Wzrost',
      content: `${height} cm`,
    },
    {
      title: 'Waga',
      content: `${weight} kg`,
    },
    {
      title: 'Lokalizacja',
      content: location,
    },
  ]

  const soccerFieldData = [
    {
      title: 'Poz. główna',
      content: position,
      isVisibleDot: true,
    },
    {
      title: 'Poz. alternatywna',
      content: altPosition,
      isVisibleDot: true,
    },
    {
      title: 'Lepsza noga',
      content: betterLeg,
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 border border-transparent border-b-light pb-7 md:grid-cols-2 md:pb-8">
        {baseData.map(d => (
          <div
            key={d.title}
            className="flex gap-3 font-inter text-body-sm font-medium md:text-body-md"
          >
            <span className="w-[5rem] text-darkAlpha-20 md:w-[7.5rem]">
              {d.title}
            </span>
            <span className="text-darkAlpha-40">{d.content}</span>
          </div>
        ))}
      </div>
      <div className="relative grid grid-cols-2">
        <div className="flex flex-col gap-4 overflow-hidden pt-6 pb-[5.7rem]">
          {soccerFieldData.map(d => (
            <div
              key={d.title}
              className="flex flex-col font-inter text-body-sm font-medium md:flex-row md:items-start md:text-body-md"
            >
              <span className="text-darkAlpha-20 md:w-[7.5rem]">{d.title}</span>
              <span className="flex items-center gap-2 text-darkAlpha-40 md:gap-3">
                {d.content}
                {d.isVisibleDot && (
                  <div
                    className={singleDotCva({
                      // this is a temporary solution
                      type: d.content === 'Napastnik' ? 'striker' : 'helper',
                    })}
                  />
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute -right-6 top-0 flex h-full w-[11.719rem] items-center justify-center bg-blueShade-10 pt-8 pb-7 md:-right-8 md:h-[13.75rem] md:w-[23.625rem]">
          <div className="relative">
            <SoccerField className="h-[8.125rem] w-[10rem] md:h-[11.25rem] md:w-[13.875rem]" />
            {/* this is temporary solution */}
            <StrikerIcon className="absolute top-0 right-[4rem] icon-32 md:top-[1rem] md:right-[5.9rem]" />
            <HelperIcon className="absolute top-[2rem] right-[1rem] icon-32 md:top-[3.2rem] md:right-[2.5rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}
