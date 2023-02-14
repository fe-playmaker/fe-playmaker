import { cva, VariantProps } from 'class-variance-authority'
import PlayerImage from 'img/images/Photo.png'
import Image from 'next/image'

const avatarCva = cva('relative z-10 rounded-full object-cover', {
  variants: {
    type: {
      default: '',
      border: '',
      premium: '',
    },
    size: {
      profile: 'w-11 h-11',
      other: 'w-10 h-10',
    },
  },
  compoundVariants: [
    {
      type: ['premium', 'border'],
      size: 'profile',
      className: 'outline-white outline-[0.188rem] outline',
    },
    {
      type: 'border',
      size: 'other',
      className: 'outline-white outline outline-[0.125rem]',
    },
  ],
  defaultVariants: {
    type: 'default',
    size: 'other',
  },
})

const premiumBorderCva = cva(
  'absolute rounded-full bg-gradient-to-br from-premiumGradient-1 via-premiumGradient-2 to-premiumGradient-3',
  {
    variants: {
      type: {
        default: 'hidden',
        border: 'hidden',
        premium: '',
      },
      size: {
        profile: 'h-[calc(100%+0.188rem*4)] w-[calc(100%+0.188rem*4)]',
        other: 'h-[calc(100%+0.125rem*2)] w-[calc(100%+0.125rem*2)]',
      },
    },
    defaultVariants: {
      type: 'default',
      size: 'other',
    },
  },
)

interface AvatarProps extends VariantProps<typeof avatarCva> {
  alt: string
}

export const Avatar = ({ alt, type, size }: AvatarProps) => (
  <div className="relative flex items-center justify-center rounded-full">
    <Image
      src={PlayerImage}
      alt={alt}
      width={400}
      height={400}
      className={avatarCva({ type, size })}
    />
    <div className={premiumBorderCva({ type, size })} aria-hidden />
  </div>
)