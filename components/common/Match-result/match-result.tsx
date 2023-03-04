'use client'

import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import TriangleRightIcon from '@/icons/TriangleRight.svg'

import MatchResultStats from './match-result-stats'
import { IMatchResult } from './types'
import { shortStatusMap } from './utils'

const statusCva = cva(
  'w-8 font-bold text-body-xs text-white flex justify-center place-items-center',
  {
    variants: {
      status: {
        win: 'bg-greenShade-50',
        draw: 'bg-darkShade-30',
        loss: 'bg-orangeShade-50',
      },
      noParticipation: {
        true: 'opacity-50',
      },
    },
  },
)

interface IProps {
  data: IMatchResult
}

const MatchResult = ({ data }: IProps) => {
  const {
    actualTeam,
    date,
    oposingTeam,
    playerStats,
    status,
    noParticipation,
    video,
  } = data

  return (
    <div className="w-full border-collapse border border-darkShade-7 bg-white">
      <div className="flex font-inter">
        <div className="flex-1">
          <div
            className={clsx(
              'flex flex-col gap-3 py-6',
              noParticipation && 'opacity-50',
            )}
          >
            <TeamRow {...actualTeam} />
            <TeamRow {...oposingTeam} />
          </div>
          <MatchResultStats
            playerStats={playerStats}
            date={date}
            noParticipation={noParticipation}
          />
        </div>
        <div className={statusCva({ status, noParticipation })}>
          {shortStatusMap[status]}
        </div>
      </div>
      {video && (
        <div className=" flex h-[3.5rem] items-center justify-center border-t border-darkShade-7 shadow-bottom">
          <Link
            href={video}
            target="_blank"
            className=" flex items-center gap-2 px-[4.5rem] py-2 font-poppins text-label-md font-bold tracking-wide"
          >
            Wideo
            <TriangleRightIcon className="h-[0.875rem] w-[0.875rem]" />
          </Link>
        </div>
      )}
    </div>
  )
}

const TeamRow = ({
  goals,
  logo,
  name,
  playerPlayed,
}: IMatchResult['actualTeam']) => {
  const textColor = playerPlayed ? 'text-dark' : 'text-darkAlpha-40'

  return (
    <div
      className={clsx(
        'relative flex items-center gap-2 px-6',
        'before:absolute before:left-[0] before:h-full before:w-[2px] before:bg-primary',
        !playerPlayed && 'before:hidden',
      )}
    >
      <Image src={logo} alt={`${name} logo`} width={24} height={24} />
      <span className={`font-medium ${textColor}  flex-1 text-body-sm`}>
        {name}
      </span>
      <span className={`text-body-md font-bold ${textColor}`}>{goals}</span>
    </div>
  )
}

export default MatchResult
