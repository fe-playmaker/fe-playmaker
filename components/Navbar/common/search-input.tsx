'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'

import SeachIcon from '@/icons/Search.svg'

interface IProps {
  className?: string
}

export const SearchInput = ({ className }: IProps) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div
      className={clsx(
        'ml-[2.4rem] flex flex-1 items-center gap-3 rounded bg-darkAlpha-5 px-5 py-4 ld:ml-[7.2rem]',
        className,
      )}
    >
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
  )
}
