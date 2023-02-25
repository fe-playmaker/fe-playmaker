import clsx from 'clsx'
import Image from 'next/image'
import { TProfileOverview } from 'types/profile'

const ExperienceTable = ({ data, total }: TProfileOverview['experience']) => (
  <div className=" flex flex-col overflow-x-auto font-medium">
    <Grid className="items-end border-b-2 border-darkAlpha-5 py-3 text-center text-body-xs text-darkAlpha-40">
      <span className="text-left">Klasa rozgrywkowa</span>
      <span>Sezony</span>
      <span>Mecze</span>
      <span>Bramki</span>
      <span>Śr. bramek</span>
      <span>Śr. minut</span>
    </Grid>

    {data.map((row, i) => (
      <Grid
        key={row.competetion}
        className={clsx(
          'relative items-center py-5 text-center',
          i !== 0 && 'border-t border-darkAlpha-5',
        )}
      >
        <div className="flex items-center gap-3 justify-self-start text-left">
          <Image
            src={row.competitionLogoUrl}
            alt={row.competetion}
            width={48}
            height={48}
            className="h-7 w-auto max-w-[19px] object-cover"
          />

          <span
            className={`text-body-sm ${
              row.competetion ? 'text-dark' : 'text-darkAlpha-40'
            }`}
          >
            {row.competetion}
          </span>
        </div>

        <span className="flex items-center justify-center gap-2 text-body-md text-darkAlpha-40">
          {row.seasons}
        </span>

        <span className="flex items-center justify-center gap-2 text-body-md text-darkAlpha-40">
          {row.matches}
        </span>
        <span className="text-body-md text-darkAlpha-40">{row.goals}</span>
        <span className="text-body-md text-darkAlpha-40">{row.avgGoals}’</span>
        <span className="text-body-md text-darkAlpha-40">
          {row.avgMinutes}’
        </span>
      </Grid>
    ))}

    <Grid className="border-t-2 border-darkAlpha-5 py-5 text-center text-body-md font-bold text-darkAlpha-40">
      <span className="text-left text-body-sm font-medium">Łącznie</span>
      <span>{total.seasons}</span>
      <span>{total.matches}</span>
      <span>{total.goals}</span>
      <span>{total.avgGoals}’</span>
      <span>{total.avgMinutes}’</span>
    </Grid>
  </div>
)

export default ExperienceTable

const Grid = ({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[]
  className?: string
}) => (
  <div
    className={`grid min-w-max grid-cols-[9.25rem_repeat(5,3rem)] gap-x-4 pl-6 pr-5 ${
      className || ''
    }`}
  >
    {children}
  </div>
)
