import clsx from 'clsx'
import { useState } from 'react'

interface IProps {
  children: React.ReactNode
  text: string
  padding?: boolean
  bottom?: boolean
}
const Tooltip = ({ children, text, padding, bottom }: IProps) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <span className="relative flex cursor-pointer flex-col items-center">
      <span
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onTouchStart={() => setIsShown(value => !value)}
      >
        {children}
      </span>
      <div
        className={clsx(
          'absolute bottom-full transition',
          !isShown && 'scale-0 opacity-0',
          isShown && 'scale-100 opacity-100',
          padding && 'py-3',
          bottom && 'top-full',
        )}
        onTouchStart={() => setIsShown(false)}
      >
        <div className="max-w-[20rem] bg-darkShade-40 px-4 py-[0.38rem] text-center font-inter text-body-xs font-medium text-white">
          {text}
        </div>
      </div>
    </span>
  )
}

export default Tooltip
