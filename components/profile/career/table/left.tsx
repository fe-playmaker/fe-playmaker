import { cx } from 'class-variance-authority'
import clsx from 'clsx'
import Image from 'next/image'
import { useContext } from 'react'
import { TProfileCareer } from 'types/profile'

import {
  TableHeaderText,
  TableLeftCell,
  TableLeftColumn,
  TableLeftHeaderCell,
  TableLeftSummaryCell,
  TableSummaryText,
} from '@/components/common/Table'
import { TableSettingsContext } from '@/components/common/Table/settings-context'

import { addRem, seasonMap } from '../helpers'

const CareerTableLeftPart = ({
  data,
  season,
}: Pick<TProfileCareer, 'data' | 'season'>) => {
  const { rowHeight } = useContext(TableSettingsContext)

  return (
    <TableLeftColumn>
      <TableLeftHeaderCell>
        <TableHeaderText text="Drużyna" className="pl-6" />
      </TableLeftHeaderCell>
      {data.map((row, i) => (
        <TableLeftCell
          customHeight={`calc(${rowHeight} ${addRem(row.mainTeam)} ${addRem(
            !!row.season,
          )})`}
          key={`left-${row.team}-${season}`}
          className={clsx(
            'relative flex items-center justify-center pr-4 pl-6 text-center font-medium',
            i !== 0 && 'border-t border-darkAlpha-5',
            row.mainTeam &&
              'before:absolute before:top-0 before:left-0 before:h-[calc(100%+1px)] before:w-[0.188rem] before:bg-primary',
          )}
        >
          <div className="flex gap-3 text-left">
            <Image
              src={row.teamLogoUrl}
              alt={row.team}
              width={48}
              height={48}
              className="mt-2 h-auto w-7 self-start"
            />
            <div className="flex flex-col ">
              <span
                className={`w-[6.625rem] text-body-sm ${
                  row.mainTeam ? 'text-dark' : 'text-darkAlpha-40'
                }`}
              >
                {row.team}
              </span>
              <span className="text-body-xs text-darkAlpha-20">
                {row.competition}
              </span>
              {row.season && (
                <span className={cx('text-body-xs', seasonMap[row.season])}>
                  {row.season}
                </span>
              )}
              {row.mainTeam && (
                <span className="text-body-xs text-darkAlpha-20">
                  Główna Drużyna
                </span>
              )}
            </div>
          </div>
        </TableLeftCell>
      ))}
      <TableLeftSummaryCell className="border-t-2 border-darkShade-5 pl-6">
        <TableSummaryText text="Łącznie" />
      </TableLeftSummaryCell>
    </TableLeftColumn>
  )
}

export default CareerTableLeftPart
