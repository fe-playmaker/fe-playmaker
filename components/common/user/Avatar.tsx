import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export const Avatar = () => (
  <div
    className={twMerge(
      'relative flex h-[6rem] w-[6rem] items-center justify-center overflow-hidden rounded-full border-[0.188rem] border-secondary p-2',
    )}
  >
    <Image
      src="https://ipla.pluscdn.pl/dituel/cp/15/15xeaz1hgt2j6b1ofx24iqnm78m4bv8h.jpg"
      alt="xd"
      width={400}
      height={400}
      className={twMerge('h-[98%] w-[98%] rounded-[50%] object-cover')}
    />
  </div>
)
