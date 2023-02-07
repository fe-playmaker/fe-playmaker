'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import ArrowLeftIcon from '@/icons/ArrowLeft.svg'
import SeachIcon from '@/icons/Search.svg'
import StarIcon from '@/icons/Star.svg'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <nav className="flex items-center justify-center gap-6 py-5 px-7">
      <ArrowLeftIcon width="20" height="20" />
      <div className="flex flex-1 items-center gap-3 rounded bg-darkAlpha-5 px-5 py-4">
        <div
          className={`transition-opacity ${
            searchValue ? 'absolute opacity-0' : 'opacity-100'
          }`}
        >
          <SeachIcon width="16" height="16" />
        </div>
        <motion.input
          type="text"
          placeholder="Szukaj"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className="w-full bg-transparent text-label-md font-medium text-darkAlpha-40 outline-none placeholder:text-darkAlpha-40"
          layout
        />
      </div>
      <StarIcon width="20" height="20" />
    </nav>
  )
}

export default Navbar
