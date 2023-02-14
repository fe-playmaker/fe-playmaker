'use client'

import clsx from 'clsx'

import { Button } from '../Button/Button'

type ButtonProps = React.ComponentProps<typeof Button>

interface IProps {
  btnText?: string
  btnIcon?: ButtonProps['icon']
  btnIntent?: ButtonProps['intent']
  btnSize?: ButtonProps['size']
  children: React.ReactElement | React.ReactElement[]
  accentClass?: string
  bgColor?: string
  onBtnClick?: () => void
}

const Banner = ({
  children,
  accentClass,
  bgColor,
  btnIcon,
  btnSize,
  btnText,
  btnIntent,
  onBtnClick,
}: IProps) => (
  <div
    className={clsx(
      'flex items-center justify-between px-6 py-5 shadow-default',
      bgColor || 'bg-white',
      accentClass &&
        `relative before:absolute before:left-0 before:h-full before:w-[0.188rem] ${accentClass}`,
    )}
  >
    <div className="flex flex-col  font-inter">{children}</div>
    <div>
      {(btnText || btnIcon) && (
        <Button
          intent={btnIntent}
          size={btnSize}
          icon={btnIcon}
          text={btnText}
          onClick={onBtnClick}
        />
      )}
    </div>
  </div>
)

export default Banner
