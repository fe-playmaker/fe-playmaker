import GameVideoImage from 'img/illustrations/gameVideo.png'
import Image from 'next/image'

export const GameVideo = () => (
  <Image
    src={GameVideoImage}
    width={335}
    height={188}
    alt="player video of game"
    className="w-full"
  />
)
