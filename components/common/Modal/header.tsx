import clsx from 'clsx'

import CloseIcon from '@/icons/Close.svg'

import { IModalProps } from './types'

interface IProps extends Pick<IModalProps, 'title' | 'closeModal' | 'caption'> {
  showBar: boolean
}

const ModalHeader = ({ title, caption, showBar, closeModal }: IProps) => (
  <div
    className={clsx(
      'relative box-content flex flex-col py-7 pl-6 md:py-[1.75rem] md:pl-8',
      showBar && 'shadow-[0_1px_0_0_#E6E8EB]',
    )}
  >
    {caption && (
      <span className="font-inter text-body-sm font-medium text-darkAlpha-20">
        {caption}
      </span>
    )}
    <span className="text-heading-xs font-bold text-dark md:text-heading-sm">
      {title}
    </span>
    <button
      className="absolute top-[1.75rem] right-7 md:top-[2.375rem] md:right-[2.375rem]"
      onClick={closeModal}
      type="button"
    >
      <CloseIcon className=" fill-dark icon-16 md:icon-20" />
    </button>
  </div>
)

export default ModalHeader
