import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, cloneElement, ReactElement } from 'react'

import { buttonIntentStyles, iconIntentStyles } from './styles'

const iconButtonCva = cva(
  'rounded-full group transition flex items-center justify-center',
  {
    variants: {
      intent: buttonIntentStyles,
      size: {
        large: 'w-[3.5rem] h-[3.5rem]',
        medium: 'w-9 h-9',
        small: 'w-[2.5rem] h-[2.5rem]',
        extraSmall: 'w-8 h-8',
      },
      desktopSize: {
        large: 'md:w-[3.5rem] md:h-[3.5rem]',
        medium: 'md:w-9 md:h-9',
        small: 'md:w-[2.5rem] md:h-[2.5rem]',
        extraSmall: 'md:w-8 md:h-8',
      },
    },
  },
)

const iconCva = cva('w-auto', {
  variants: {
    intent: iconIntentStyles,
    size: {
      large: 'h-[1.125rem]',
      medium: 'h-[1.125rem]',
      small: 'h-5',
      extraSmall: 'h-[0.938rem]',
    },
    desktopSize: {
      large: 'md:h-[1.125rem]',
      medium: 'md:h-[1.125rem]',
      small: 'md:h-5',
      extraSmall: 'md:h-[0.938rem]',
    },
  },
})

interface IProps
  extends VariantProps<typeof iconButtonCva>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
}

const IconButton = ({
  icon,
  intent,
  size,
  desktopSize,
  className,
  ...props
}: IProps) => (
  <button
    type="button"
    className={iconButtonCva({ intent, size, desktopSize, className })}
    {...props}
  >
    {cloneElement(icon, { className: iconCva({ intent, size, desktopSize }) })}
  </button>
)

export default IconButton
