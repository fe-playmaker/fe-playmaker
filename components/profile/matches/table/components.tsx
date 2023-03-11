import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { TProfileMatches } from 'types/profile'

export const TeamRow = ({
  team,
  className,
}: {
  team:
    | TProfileMatches['matches'][number]['awayTeam']
    | TProfileMatches['matches'][number]['homeTeam']
  className?: string
}) => (
  <div className={cx('relative flex items-center justify-between', className)}>
    {team.mainTeam && (
      <div className="absolute -left-4 h-full w-1 bg-primary md:-left-7 md:w-[0.188rem]" />
    )}
    <div className="flex items-center">
      <Image
        src={team.logoUrl}
        alt={team.name}
        width={32}
        height={32}
        className="icon-16"
      />
      <span className="w-[6.2rem] flex-1 truncate pl-[0.375rem] pr-3 text-body-xs text-darkAlpha-40 md:w-[9.75rem] md:text-body-sm">
        {team.name}
      </span>
    </div>

    <span className="w-8 text-center text-body-sm font-bold text-darkAlpha-40 md:w-[2.5rem] md:text-body-md">
      {team.score}
    </span>
  </div>
)
