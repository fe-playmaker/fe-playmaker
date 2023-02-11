import { cva, VariantProps } from 'class-variance-authority'
import PlayerImage from 'img/images/Photo.png'
import Image from 'next/image'

const avatarCva = cva(['border-solid rounded-full object-cover z-10'], {
  variants: {
    type: {
      default: 'border-none',
      border: 'border-white border-[0.188rem]',
      premium: 'border-none',
      premiumProfile: 'border-white border-[0.188rem]',
    },
    size: {
      profile: 'w-11 h-11',
      other: 'w-10 h-10',
    },
  },
  defaultVariants: {
    type: 'default',
    size: 'profile',
  },
})

interface AvatarProps extends VariantProps<typeof avatarCva> {
  alt: string
}

export const Avatar = ({ alt, type, size }: AvatarProps) => (
  <div className="relative flex items-center justify-center">
    <Image
      src={PlayerImage}
      alt={alt}
      width={400}
      height={400}
      className={avatarCva({ type, size })}
    />
    {!(type === 'border' || type === 'default') && (
      <div className="absolute h-[6.375rem] w-[6.375rem] rounded-[50%] bg-gradient-to-r from-premiumGradient-1 via-premiumGradient-2 to-premiumGradient-3" />
    )}
  </div>
)
