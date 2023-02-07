import Image from 'next/image'
import { cva, VariantProps } from 'class-variance-authority'

const avatarCva = cva(
  [
    'relative flex items-center justify-center',
    'overflow-hidden rounded-full border-[0.188rem] border-secondary p-2'
  ],
  {
    variants: {
      size: {
        large: ['w-[7.5rem] h-[7.5rem]'],
        small: ['w-[6rem] h-[6rem]']
      }
    }
  }
)

interface AvatarProps extends VariantProps<typeof avatarCva> {
  readonly image: string
  readonly playerName: string
}

export const Avatar = ({ image, playerName, size }: AvatarProps) => (
  <div className={avatarCva({ size })}>
    <Image
      src={image}
      alt={playerName}
      width={400}
      height={400}
      className='h-[98%] w-[98%] rounded-[50%] object-cover'
    />
  </div>
)
