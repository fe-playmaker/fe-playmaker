import { IProfileOverviewData } from 'dummy-api/profile/overview'
import GameVideoImage from 'img/illustrations/gameVideo.png'
import NothingVideoIcon from 'img/illustrations/NothingVideoBox.svg'
import Image from 'next/image'

export const GameVideo = ({
  playerData,
}: Pick<IProfileOverviewData, 'playerData'>) => {
  const hasVideo = !!playerData.video

  return (
    <div>
      {hasVideo ? (
        <Image
          src={GameVideoImage}
          width={335}
          height={188}
          alt="player video of game"
          className="w-full"
        />
      ) : (
        <div className="flex flex-col items-center gap-5">
          <NothingVideoIcon className="h-[3.5rem] w-[4.5rem]" />
          <p className="text-center font-inter text-body-sm text-darkAlpha-20">
            Zawodnik nie dodał jeszcze żadnego <br /> wideo ze swojej gry
          </p>
        </div>
      )}
    </div>
  )
}
