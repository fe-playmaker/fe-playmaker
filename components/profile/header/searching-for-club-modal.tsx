import { TProfileHeader } from 'types/profile'

import LocalizationBanner from '@/components/common/Banner/localization-banner'
import Modal from '@/components/common/Modal/modal'
import SendIcon from '@/icons/Send.svg'
import StarIcon from '@/icons/Star.svg'

interface IProps extends Pick<TProfileHeader, 'status'> {
  open: boolean
  closeModal: () => void
}

const SearchingForClubModal = ({
  status: { searchingForClub },
  open,
  closeModal,
}: IProps) => (
  <Modal
    title="Szukam klubu"
    show={open}
    closeModal={closeModal}
    btnSecondaryIcon={
      <StarIcon style={{ height: '1.5rem', width: '1.5rem' }} />
    }
    btnPrimaryIcon={<SendIcon />}
    btnPrimaryText="Napisz"
  >
    <div className="flex flex-col gap-7 pb-8 font-inter">
      <LocalizationBanner
        localizationText={searchingForClub?.localization.name || ''}
        range={searchingForClub?.localization.range || 0}
      />

      <div>
        <span className="text-body-sm font-medium text-darkAlpha-20">
          Oczekiwania
        </span>
        <div className="mt-3 flex flex-wrap gap-4">
          {searchingForClub?.expectations.map(exp => (
            <span
              key={`modal-exp-${exp}`}
              className="px-3 py-[0.188rem] text-body-sm font-bold text-blueShade-50 outline outline-1 outline-blueShade-30 md:px-4 md:py-[0.38rem] md:text-body-md"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>

      {searchingForClub?.additional && (
        <>
          <div className="h-[1px] w-full bg-darkShade-5" />
          <div className="flex flex-col">
            <span className="text-body-sm font-medium text-darkAlpha-20">
              Dodatkowy komentarz
            </span>
            <span className="mt-3 text-body-sm font-medium text-darkAlpha-40 md:text-body-md">
              {searchingForClub.additional}
            </span>
          </div>
        </>
      )}
    </div>
  </Modal>
)

export default SearchingForClubModal
