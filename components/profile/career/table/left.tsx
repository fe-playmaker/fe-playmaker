import { cx } from 'class-variance-authority'
import clsx from 'clsx'
import Image from 'next/image'
import { TProfileCareer } from 'types/profile'

import {
  TableHeaderText,
  TableLeftCell,
  TableLeftColumn,
  TableLeftHeaderCell,
  TableLeftSummaryCell,
  TableSummaryText,
} from '@/components/common/Table'

import { addHeight, seasonMap } from '../helpers'

const CareerTableLeftPart = ({
  data,
  season,
}: Pick<TProfileCareer, 'data' | 'season'>) => (
  <TableLeftColumn>
    <TableLeftHeaderCell>
      <TableHeaderText text="Drużyna" className="pl-6 md:pl-8" />
    </TableLeftHeaderCell>
    {data.map((row, i) => (
      <TableLeftCell
        key={`left-${row.team}-${season}`}
        className={clsx(
          'relative flex items-center justify-center pr-4 pl-6 text-center font-medium md:pl-8',
          i !== 0 && 'border-t border-darkAlpha-5',
          row.mainTeam &&
            'before:absolute before:top-0 before:left-0 before:h-[calc(100%+1px)] before:w-[0.188rem] before:bg-primary md:before:w-2',
        )}
        addHeight={addHeight(row.mainTeam, !!row.season)}
      >
        <div className="flex gap-3 text-left md:gap-5">
          <Image
            src={row.teamLogoUrl}
            alt={row.team}
            width={48}
            height={48}
            className="mt-2 h-auto w-7 self-start"
          />
          <div className="flex w-[6.625rem] flex-col md:w-[16rem]">
            <span
              className={`text-body-sm md:text-body-md ${
                row.mainTeam ? 'text-dark' : 'text-darkAlpha-40'
              }`}
            >
              {row.team}
            </span>
            <span className="text-body-xs text-darkAlpha-20 md:text-body-sm">
              {row.competition}
            </span>
            {row.season && (
              <span
                className={cx(
                  'mt-1 text-body-xs md:text-body-sm',
                  seasonMap[row.season],
                )}
              >
                {row.season}
              </span>
            )}
            {row.mainTeam && (
              <span className="text-body-xs text-darkAlpha-20 md:text-body-sm">
                Główna Drużyna
              </span>
            )}
          </div>
        </div>
      </TableLeftCell>
    ))}
    <TableLeftSummaryCell className="border-t-2 border-darkShade-5 pl-6 md:pl-8">
      <TableSummaryText text="Łącznie" />
    </TableLeftSummaryCell>
  </TableLeftColumn>
)

export default CareerTableLeftPart
