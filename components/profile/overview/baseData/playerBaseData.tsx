'use client'

import { cva } from 'class-variance-authority'
import clsx from 'clsx'
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
      content: `${age} lat (${new Date().getFullYear() - age})`,
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

  const getPositions = () => {
    const positions = [
      { title: 'Napastnik', grid: 'col-start-2 items-center justify-center' },
      { title: 'Lewy pomocnik', grid: 'row-start-2 items-end justify-end' },
      {
        title: 'Prawy pomocnik',
        grid: 'row-start-2 col-start-3 items-end justify-start',
      },
      {
        title: 'Środkowy pomocnik ofensywny',
        grid: 'col-start-2 row-start-2 items-center justify-center',
      },
      {
        title: 'Środkowy pomocnik',
        grid: 'col-start-2 row-start-3 items-start justify-center',
      },
      {
        title: 'Środkowy pomocnik defensywny',
        grid: 'col-start-2 row-start-3 md:items-end items-center justify-center',
      },
      {
        title: 'Lewy obrońca',
        grid: 'row-start-4 md:items-end items-center justify-center pl-5',
      },
      {
        title: 'Środkowy obrońca',
        grid: 'row-start-4 col-start-2 items-center justify-center',
      },
      {
        title: 'Prawy obrońca',
        grid: 'row-start-4 col-start-3 md:items-end items-center justify-center pr-5',
      },
      {
        title: 'Bramkarz',
        grid: 'row-start-5 col-start-2 items-center justify-center',
      },
    ]

    const mainPosition = positions.find(
      pos => pos.title.toLowerCase() === position.toLowerCase(),
    )
    const alternatePosition = positions.find(
      pos => pos.title.toLowerCase() === altPosition.toLowerCase(),
    )

    return { mainPosition, alternatePosition }
  }

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
              <p className="flex items-center gap-2 text-darkAlpha-40 md:gap-3">
                <span className="max-w-[9rem]">{d.content}</span>
                {d.isVisibleDot && (
                  <div
                    className={singleDotCva({
                      type:
                        d.content === getPositions().mainPosition?.title
                          ? 'striker'
                          : 'helper',
                    })}
                  />
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute -right-6 top-0 flex h-full w-[11.719rem] items-center justify-center bg-blueShade-10 pt-8 pb-7 md:-right-8 md:w-[23.625rem]">
          <div className="relative">
            <SoccerField className="h-[8.125rem] w-[10rem] md:h-[11.25rem] md:w-[13.875rem]" />
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-6 gap-2">
              <div
                className={clsx(
                  'flex h-9 w-full',
                  getPositions().mainPosition?.grid,
                )}
              >
                <StrikerIcon className="z-10 flex h-full w-full icon-32 md:h-8 md:w-8" />
              </div>
              <div
                className={clsx(
                  'flex h-9 w-full',
                  getPositions().alternatePosition?.grid,
                )}
              >
                <HelperIcon className="flex h-full w-full icon-32 md:h-8 md:w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
