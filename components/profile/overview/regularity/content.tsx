import Image from 'next/image'
import { TProfileOverviewRegularity } from 'types/profile'

import Chart from '@/icons/Chart.svg'
import TrendUpTshirt from '@/icons/TrendUpTshirt.svg'

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
      <div className="mt-7 mb-8 flex items-center gap-7 bg-white p-5 pl-7 shadow-default">
        {additional.type === 'regular' && (
          <Image
            src={additional.teamLogoUrl || ''}
            width={40}
            height={40}
            alt="team logo"
            className="icon-24"
          />
        )}
        {additional.type === 'key' && <TrendUpTshirt className="icon-40" />}

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
      <div className="flex items-center gap-7">
        <Chart className="h-[9.688rem] w-[9.688rem]" />
        <div className="flex flex-col gap-3">
          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm">
            <div className="h-[1.75rem] w-[0.375rem] bg-greenShade-50" />
            <div>
              <p className="font-medium">Pierwsza &quot;11&quot;</p>
              <p className="font-bold">
                {firstEleven} z {ofMatches} ({getPercents(firstEleven)}%)
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm">
            <div className="h-[1.75rem] w-[0.375rem] bg-greenShade-30" />
            <div>
              <p className="font-medium">Wejście z ławki</p>
              <p className="font-bold">
                {fromBench} z {ofMatches} ({getPercents(fromBench)}%)
              </p>
            </div>
          </div>

          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm">
            <div className="h-[1.75rem] w-[0.375rem] bg-blueShade-50" />
            <div>
              <p className="font-medium">Ławka</p>
              <p className="font-bold">
                {!bench
                  ? '-'
                  : `${bench} z ${ofMatches} (${getPercents(fromBench)}%)`}
              </p>
            </div>
          </div>

          <div className="relative flex items-center gap-[0.625rem] font-inter text-body-sm">
            <div className="h-[1.75rem] w-[0.375rem] bg-darkShade-10" />
            <div>
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
