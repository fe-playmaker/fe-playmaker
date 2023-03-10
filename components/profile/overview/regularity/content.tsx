import Image from 'next/image'
import { TProfileOverviewRegularity } from 'types/profile'

import TrendUpTshirt from '@/icons/TrendUpTshirt.svg'

import { ChartPie } from './chart-pie'

type RegularityType = TProfileOverviewRegularity

interface IProps extends RegularityType {
  playerName: string
}

export const RegularityContent = ({
  fromBench,
  ofMatches,
  firstEleven,
  bench,
  outsideCadre,
  playerName,
  additional,
}: IProps) => {
  const getPercents = (value: number) => Math.round((value / ofMatches) * 100)

  return (
    <div>
      <div className="mt-7 mb-8 flex items-center gap-4 bg-white p-5 pl-7 shadow-default md:mt-8 md:gap-5">
        {additional.type === 'regular' && (
          <Image
            src={additional.teamLogoUrl || ''}
            width={40}
            height={40}
            alt="team logo"
            className="icon-24"
          />
        )}
        {additional.type === 'key' && (
          <div>
            <TrendUpTshirt className="icon-40" />
          </div>
        )}

        <div className="font-inter text-body-sm md:text-body-md">
          <h4 className="font-bold">
            {additional.type === 'regular' && 'Regularna gra'}
            {additional.type === 'key' && 'Kluczowy zawodnik'}
          </h4>
          <p className="font-medium text-darkAlpha-40">
            {additional.type === 'regular' &&
              `W sezonie 22/23 ${playerName} regularnie występuje w swojej drużynie.`}
            {additional.type === 'key' &&
              `W sezonie 22/23 ${playerName} wystawiany jest
                      zwykle w pierwszej 11.`}
          </p>
        </div>
      </div>
      <h4 className="hidden pb-8 font-poppins text-heading-micro font-bold text-dark md:block">
        Regularność gry
      </h4>
      <div className="flex items-center gap-7 md:gap-10">
        <ChartPie
          bench={bench}
          fromBench={fromBench}
          outsideCadre={outsideCadre}
          firstEleven={firstEleven}
          ofMatches={ofMatches}
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7">
          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm md:text-body-md">
            <div className="h-[1.75rem] w-[0.375rem] bg-greenShade-50 md:h-[2.125rem] md:w-3" />
            <div className="md:w-[9rem]">
              <p className="font-medium">Pierwsza &quot;11&quot;</p>
              <p className="font-bold">
                {firstEleven} z {ofMatches} ({getPercents(firstEleven)}%)
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm md:text-body-md">
            <div className="h-[1.75rem] w-[0.375rem] bg-greenShade-30 md:h-[2.125rem] md:w-3" />
            <div className="md:w-[9rem]">
              <p className="font-medium">Wejście z ławki</p>
              <p className="font-bold">
                {fromBench} z {ofMatches} ({getPercents(fromBench)}%)
              </p>
            </div>
          </div>

          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm md:text-body-md">
            <div className="h-[1.75rem] w-[0.375rem] bg-blueShade-50 md:h-[2.125rem] md:w-3" />
            <div className="md:w-[9rem]">
              <p className="font-medium">Ławka</p>
              <p className="font-bold">
                {!bench
                  ? '-'
                  : `${bench} z ${ofMatches} (${getPercents(fromBench)}%)`}
              </p>
            </div>
          </div>

          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm md:text-body-md">
            <div className="h-[1.75rem] w-[0.375rem] bg-darkShade-10 md:h-[2.125rem] md:w-3" />
            <div className="md:w-[9rem]">
              <p className="font-medium">Poza kadrą</p>
              <p className="font-bold">
                {outsideCadre} z {ofMatches} ({getPercents(outsideCadre)}%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
