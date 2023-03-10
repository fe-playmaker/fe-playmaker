import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { ComponentProps } from 'react'

const borderCva = cva('z-10 after:rounded-[50%] relative ', {
  variants: {
    type: {
      default: '',
      border: '',
      premium: '',
    },
    size: {
      // its a temporary solution for good view of header
      profile: 'w-11 h-11 md:w-[7.5rem] md:h-[7.5rem]',
      other: 'w-9 h-9',
    },
  },
  compoundVariants: [
    {
      type: ['premium', 'border'],
      size: 'profile',
      className:
        'after:absolute after:inset-0 after:ring-[0.188rem] after:ring-white',
    },
    {
      type: 'border',
      size: 'other',
      className:
        'after:absolute after:inset-0 after:ring-[0.125rem] after:ring-white',
    },
  ],
  defaultVariants: {
    type: 'default',
    size: 'other',
  },
})

const premiumBorderCva = cva(
  'absolute rounded-[50%] bg-gradient-to-br from-premiumGradient-1 via-premiumGradient-2 to-premiumGradient-3',
  {
    variants: {
      type: {
        default: 'hidden',
        border: 'hidden',
        premium: '',
      },
      size: {
        profile: 'h-[calc(100%+0.188rem*4)] w-[calc(100%+0.188rem*4)]',
        other: 'h-[calc(100%+0.188rem*2)] w-[calc(100%+0.188rem*2)]',
      },
    },
    defaultVariants: {
      type: 'default',
      size: 'other',
    },
  },
)

interface AvatarProps extends VariantProps<typeof borderCva> {
  alt: string
  src: string
  props?: ComponentProps<typeof Image>
}

export const Avatar = ({ alt, type, size, src, props }: AvatarProps) => (
  <div className="relative flex items-center justify-center rounded-[50%]">
    <div className={borderCva({ type, size })}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="h-full w-full rounded-[50%] object-cover"
        {...props}
      />
    </div>
    <div className={premiumBorderCva({ type, size })} aria-hidden />
  </div>
)
