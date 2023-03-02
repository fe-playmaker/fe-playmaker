'use client'

import ArrowLeftIcon from '@/icons/ArrowLeft.svg'
import StarIcon from '@/icons/Star.svg'

import { SearchInput } from './common/search-input'

const Navbar = () => (
  <nav className="relative z-50 flex items-center justify-center gap-6 py-5 px-7 md:hidden">
    <ArrowLeftIcon className="icon-20" />
    <SearchInput />
    <StarIcon className="icon-20" />
  </nav>
)

export default Navbar
