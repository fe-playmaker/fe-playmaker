import { Dispatch, SetStateAction } from 'react'

import ArrowDownIcon from '@/icons/ArrowDown.svg'

interface IProps {
  setShowCount: Dispatch<SetStateAction<number>>
}

export const ShowMoreButton = ({ setShowCount }: IProps) => (
  <div className="flex justify-center">
    <button
      className="flex items-center gap-2 pt-5 text-label-sm text-darkAlpha-40 md:pb-4 md:text-label-md"
      type="button"
      onClick={() => setShowCount(val => val + 3)}
    >
      Pokaż kolejne <ArrowDownIcon className="icon-16" />
    </button>
  </div>
)
