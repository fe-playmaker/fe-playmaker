import { motion } from 'framer-motion'
import Image from 'next/image'
import { TProfileOverview } from 'types/profile'
import { formatDate } from 'utils/format-date'

import GreenArrow from '@/icons/GreenArrowToLeft.svg'

interface IProps extends Pick<TProfileOverview, 'transfers'> {
  showCount: number
}

export const TransfersContent = ({ transfers, showCount }: IProps) => (
  <div className="overflow-hidden">
    {transfers.slice(0, showCount).map(transfer => (
      <motion.div
        key={transfer.id}
        className="flex flex-col gap-2 border-b border-darkAlpha-5 py-5 last-of-type:border-b-transparent"
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between gap-7">
          <div className="flex w-[8.688rem] items-center gap-3 md:w-[19.375rem] md:gap-4">
            <Image
              src={transfer.from.logoUrl}
              alt={transfer.from.name}
              width={19}
              height={24}
              className="h-7 w-auto md:h-[1.875rem]"
            />
            <p className="text-body-sm  text-darkAlpha-40 md:text-body-md">
              {transfer.from.name}
            </p>
          </div>

          <div className="flex items-center gap-6 md:gap-7">
            <GreenArrow className="icon-24" />
            <div className="flex w-[8.688rem] items-center gap-3 md:w-[19.375rem] md:gap-4">
              <Image
                src={transfer.to.logoUrl}
                alt={transfer.to.name}
                width={19}
                height={24}
                className="h-7 w-auto md:h-[1.875rem]"
              />
              <p className="text-body-sm text-darkAlpha-40 md:text-body-md">
                {transfer.to.name}
              </p>
            </div>
          </div>
        </div>
        <p className="pl-[27px] font-inter text-body-xs font-medium text-darkAlpha-40 md:pl-[36px] md:text-body-sm">
          {transfer.type} ({formatDate(transfer.date)})
        </p>
      </motion.div>
    ))}
  </div>
)
