import clsx from 'clsx'

import { Button } from '../Button/Button'
import { IModalProps } from './types'

interface IProps
  extends Pick<
    IModalProps,
    | 'btnVertical'
    | 'btnPrimaryClick'
    | 'btnPrimaryIcon'
    | 'btnPrimaryText'
    | 'btnSecondaryClick'
    | 'btnSecondaryIcon'
    | 'btnSecondaryText'
  > {
  showFog: boolean
  showBar: boolean
}

const ModalFooter = ({
  btnVertical,
  btnPrimaryClick,
  btnPrimaryIcon,
  btnPrimaryText,
  btnSecondaryClick,
  btnSecondaryIcon,
  btnSecondaryText,
  showFog,
  showBar,
}: IProps) =>
  btnPrimaryText || btnPrimaryIcon || btnSecondaryText || btnSecondaryIcon ? (
    <div
      className={clsx(
        'relative z-50 flex w-full gap-4 py-7 px-6 md:gap-5 md:px-8 md:pb-8',
        btnVertical && 'flex-col-reverse',
        showBar && 'shadow-[0_-1px_0_0_#E6E8EB]',
      )}
    >
      {(btnSecondaryText || btnSecondaryIcon) && (
        <Button
          text={btnSecondaryText}
          icon={btnSecondaryIcon}
          onClick={btnSecondaryClick}
          intent="secondary"
          size="medium"
          desktopSize="large"
          className={clsx(
            'flex justify-center',
            btnVertical && 'flex-1',
            !(btnSecondaryIcon && !btnSecondaryText) && 'flex-1',
          )}
        />
      )}
      {(btnPrimaryText || btnPrimaryIcon) && (
        <Button
          text={btnPrimaryText}
          icon={btnPrimaryIcon}
          onClick={btnPrimaryClick}
          intent="primary"
          size="medium"
          desktopSize="large"
          className={clsx(
            'flex justify-center',
            btnVertical && 'flex-1',
            !(btnPrimaryIcon && !btnPrimaryText) && 'flex-1',
          )}
        />
      )}
      <div
        className={clsx(
          'absolute top-[calc(-1.5rem_-_1px)] left-0 z-40 h-7 w-full transition-opacity md:top-[calc(-2rem_-_1px)] md:h-8',
          !showFog && 'opacity-0',
        )}
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
        }}
      />
    </div>
  ) : null

export default ModalFooter
