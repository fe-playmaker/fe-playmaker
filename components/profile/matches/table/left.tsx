import clsx from 'clsx'
import Link from 'next/link'
import { useContext } from 'react'
import { TProfileMatches } from 'types/profile'
import { formatDate } from 'utils/format-date'

import {
  TableHeaderText,
  TableLeftCell,
  TableLeftColumn,
  TableLeftHeaderCell,
  TableLeftSummaryCell,
  TableSummaryText,
} from '@/components/common/Table'
import { TableScrolledContext } from '@/components/common/Table/scrolled-context'
import PlayIcon from '@/icons/TriangleRight.svg'

import { TeamRow } from './components'

interface IProps {
  matches: TProfileMatches['matches']
}

const MatchesTableLeftPart = ({ matches }: IProps) => {
  const { isScrolled } = useContext(TableScrolledContext)

  return (
    <TableLeftColumn>
      <TableLeftHeaderCell>
        <TableHeaderText text="Mecz" className="pl-5 md:pl-8" />
      </TableLeftHeaderCell>

      {matches.map(
        ({ awayTeam, competition, date, homeTeam, wideoUrl, id }, i) => (
          <TableLeftCell
            key={`left-matches-table-cell-${id}`}
            expanded={!!wideoUrl}
            className={clsx(
              'flex items-center pl-4 md:pl-7',
              i !== 0 && 'border-t border-darkShade-5',
            )}
          >
            <div
              className={clsx(
                'flex w-full flex-col justify-center',
                !isScrolled && 'shadow-[1px_0_0_0_#EDEDED]',
              )}
            >
              <TeamRow team={homeTeam} />
              <TeamRow team={awayTeam} className="mt-2 md:mt-3" />
              <div className="mt-3 flex justify-between pr-4 text-[0.563rem] text-darkAlpha-20 md:text-body-xs">
                <span>{formatDate(date)}</span>
                <span>{competition}</span>
              </div>
              {wideoUrl && (
                <Link
                  href={wideoUrl}
                  target="_blank"
                  className="mr-4 mt-3 flex items-center justify-center gap-2 py-1 text-body-sm font-bold text-darkAlpha-40 outline outline-1 outline-darkAlpha-20 md:mt-4 md:py-[0.375rem] md:text-body-md"
                >
                  <PlayIcon className="h-3 fill-darkAlpha-40 md:h-4" /> Wideo
                </Link>
              )}
            </div>
          </TableLeftCell>
        ),
      )}

      <TableLeftSummaryCell className="border-t-2 border-darkShade-5 pl-6 md:pl-8">
        <TableSummaryText text="Łącznie" />
      </TableLeftSummaryCell>

      <TableLeftSummaryCell className="border-t border-darkShade-5 pl-6 md:pl-8">
        <TableSummaryText text="Śr. / mecz" />
      </TableLeftSummaryCell>
    </TableLeftColumn>
  )
}

export default MatchesTableLeftPart
