import { IProfileOverviewData } from 'dummy-api/profile/overview'
import Image from 'next/image'

import GreenArrow from '@/icons/GreenArrowToLeft.svg'

export const Transfers = ({ data }: IProfileOverviewData['transfers']) => (
  <div>
    {data.map(transfer => (
      <div
        key={transfer.id}
        className="flex flex-col gap-2 border-b border-darkAlpha-5 py-5 last-of-type:border-b-transparent"
      >
        <div className="flex items-center justify-between gap-7">
          <div className="flex items-center gap-3">
            <Image
              src={transfer.from.logo}
              alt={transfer.from.name}
              width={19}
              height={24}
            />
            <p className="w-11 text-body-sm text-darkAlpha-40">
              {transfer.from.name}
            </p>
          </div>

          <GreenArrow className="icon-24" />

          <div className="flex items-center gap-3">
            <Image
              src={transfer.to.logo}
              alt={transfer.to.name}
              width={19}
              height={24}
            />
            <p className="w-11 text-body-sm text-darkAlpha-40">
              {transfer.to.name}
            </p>
          </div>
        </div>
        <p className="pl-[27px] text-body-xs text-darkAlpha-40">
          {transfer.type}
        </p>
      </div>
    ))}
  </div>
)