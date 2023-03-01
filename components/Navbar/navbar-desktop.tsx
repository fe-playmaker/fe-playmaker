'use client'

import LargeLogo from 'img/illustrations/LargeLogo.svg'
import Link from 'next/link'

import BellIcon from '@/icons/Bellicon.svg'
import BriefcaseIcon from '@/icons/BriefcaseIcon.svg'
import ChatIcon from '@/icons/ChatIcon.svg'
import HamburgerMenuIcon from '@/icons/HamburgerMenuIcon.svg'
import ShirtIcon from '@/icons/ShirtIcon.svg'
import StarIcon from '@/icons/Star.svg'
import TieIcon from '@/icons/TieIcon.svg'

import { Button } from '../common/Button/Button'
import { NavLink } from './common/nav-link'
import { SearchInput } from './common/search-input'

const NavbarDesktop = () => (
  <nav className="relative z-50 mb-7 hidden flex-col gap-6 bg-white py-6 px-8 md:flex">
    <div className="flex w-full items-center justify-between gap-[3.3rem]">
      <Link href="/">
        <LargeLogo className="h-[1.375rem] w-[9.375rem]" />
      </Link>

      <SearchInput />

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-7">
          <StarIcon className="icon-20" />
          <ChatIcon className="icon-20" />
          <BellIcon className="icon-20" />
        </div>
        <Button text="Zaloguj się" intent="primary" size="small" />
      </div>
    </div>

    <div className="flex items-center gap-[12rem] ld:gap-[16.9rem]">
      <button type="button" className="flex items-center gap-3">
        <HamburgerMenuIcon className="icon-16" />
        <span className="text-label-md text-darkAlpha-40">Menu</span>
      </button>

      <div className="flex items-center gap-8 text-label-md">
        <NavLink href="/zawodnicy" icon={<ShirtIcon />} text="Zawodnicy" />
        <NavLink href="/kluby" icon={<BriefcaseIcon />} text="Kluby" />
        <NavLink href="/trenerzy" icon={<TieIcon />} text="Trenerzy" />
      </div>
    </div>
  </nav>
)

export default NavbarDesktop
