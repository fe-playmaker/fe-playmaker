import MapImage from 'img/mock/banner-localization.png'
import Image from 'next/image'

interface IProps {
  localizationText: string
  range: number
}
const LocalizationBanner = ({ localizationText, range }: IProps) => (
  <div className=" flex h-[6rem] items-center justify-between font-inter shadow-default md:h-[7.5rem]">
    <div className="flex flex-col gap-3 bg-white pl-5 md:pl-7">
      <span className="text-body-sm font-medium text-darkAlpha-20">
        Dogodna lokalizacja
      </span>
      <span className="text-body-sm font-bold text-dark md:text-body-md">
        {localizationText}
        <br />+{range} km
      </span>
    </div>
    <Image
      src={MapImage}
      alt={`${localizationText} on map`}
      className="h-full w-auto object-cover"
    />
  </div>
)

export default LocalizationBanner
