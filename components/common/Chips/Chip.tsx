'use client'

import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import type { ReactNode } from 'react'

const chipsCva = cva(['border-2 border-transparent rounded-full'], {
  variants: {
    intent: {
      selected: ['text-dark border-dark'],
      unselected: ['bg-white', 'text-darkAlpha-40', 'shadow-default'],
    },
    size: {
      small: ['text-label-sm', 'px-4', 'py-[0.469rem]'],
    },
  },
})

interface ChipsProps extends VariantProps<typeof chipsCva> {
  readonly children: ReactNode
  readonly query: string
}

export const Chip = ({ children, size, query, intent }: ChipsProps) => (
  <Link
    href={{
      pathname: '/players',
      query: { matches: query.toLowerCase() },
    }}
    className={chipsCva({ size, intent })}
  >
    {children}
  </Link>
)
