'use client'

import clsx from 'clsx'

import { Button } from '../Button/Button'

type ButtonProps = React.ComponentProps<typeof Button>

interface IProps {
  btnText?: string
  btnIcon?: ButtonProps['icon']
  btnIntent?: ButtonProps['intent']
  btnSize?: ButtonProps['size']
  btnDesktopSize?: ButtonProps['desktopSize']
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
  btnDesktopSize,
  onBtnClick,
}: IProps) => (
  <div
    className={clsx(
      'flex items-center justify-between px-6 py-5 shadow-default',
      bgColor || 'bg-white',
      accentClass &&
        `relative before:absolute before:left-0 before:h-full before:w-[0.188rem] md:before:w-2 ${accentClass}`,
    )}
  >
    <div className="flex flex-1 flex-col overflow-hidden pr-4 font-inter">
      {children}
    </div>
    <div>
      {(btnText || btnIcon) && (
        <Button
          intent={btnIntent}
          size={btnSize}
          desktopSize={btnDesktopSize}
          icon={btnIcon}
          text={btnText}
          onClick={onBtnClick}
        />
      )}
    </div>
  </div>
)

export default Banner
