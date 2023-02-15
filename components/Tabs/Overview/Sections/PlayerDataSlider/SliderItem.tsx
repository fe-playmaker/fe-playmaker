import type { ReactElement } from 'react'

interface SliderProps {
  title: string
  icon: ReactElement
}

export const SliderItem = ({ title, icon }: SliderProps) => (
  <div className="flex w-[7rem] flex-col items-center gap-3 p-3 pb-5">
    {icon}

    <p className="text-center font-inter text-body-sm font-medium text-darkAlpha-40">
      {title}
    </p>
  </div>
)
