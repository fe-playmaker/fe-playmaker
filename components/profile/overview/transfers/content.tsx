import Image from 'next/image'
import { TProfileOverview } from 'types/profile'
import { formatDate } from 'utils/format-date'

import GreenArrow from '@/icons/GreenArrowToLeft.svg'

export const TransfersContent = ({
  transfers,
}: Pick<TProfileOverview, 'transfers'>) => (
  <div>
    {transfers.map(transfer => (
      <div
        key={transfer.id}
        className="flex flex-col gap-2 border-b border-darkAlpha-5 py-5 last-of-type:border-b-transparent"
      >
        <div className="flex items-center justify-between gap-7">
          <div className="flex items-center gap-3">
            <Image
              src={transfer.from.logoUrl}
              alt={transfer.from.name}
              width={19}
              height={24}
            />
            <p className="w-11 text-body-sm text-darkAlpha-40">
              {transfer.from.name}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <GreenArrow className="icon-24" />
            <div className="flex items-center gap-3">
              <Image
                src={transfer.to.logoUrl}
                alt={transfer.to.name}
                width={19}
                height={24}
              />
              <p className="w-11 text-body-sm text-darkAlpha-40">
                {transfer.to.name}
              </p>
            </div>
          </div>
        </div>
        <p className="pl-[27px] font-inter text-body-xs font-medium text-darkAlpha-40">
          {transfer.type} ({formatDate(transfer.date)})
        </p>
      </div>
    ))}
  </div>
)
