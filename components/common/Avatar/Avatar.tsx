import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const avatarCva = cva(
  [
    'relative flex items-center justify-center',
    'overflow-hidden rounded-full p-2',
  ],
  {
    variants: {
      type: {
        default: 'bg-none',
        border: 'bg-white',
        premium:
          'bg-gradient-to-r from-premiumGradient-1 via-premiumGradient-2 to-premiumGradient-3',
      },
      size: {
        large: ['w-11 h-11'],
        small: ['w-10 h-10'],
      },
    },
  },
)

interface AvatarProps extends VariantProps<typeof avatarCva> {
  image: string
  alt: string
}

export const Avatar = ({ image, alt, size, type }: AvatarProps) => (
  <div className={avatarCva({ size, type })}>
    <Image
      src={image}
      alt={alt}
      width={400}
      height={400}
      className="h-full w-full rounded-[50%] object-cover"
    />
  </div>
)
