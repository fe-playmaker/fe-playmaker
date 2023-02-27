'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactElement } from 'react'
import { cloneElement } from 'react'

interface IProps {
  icon: ReactElement
  text: string
  href: string
}

export const NavLink = ({ icon, text, href }: IProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={clsx(
        'flex items-center gap-3',
        pathname === href ? 'font-bold' : 'font-medium',
      )}
    >
      {cloneElement(icon, {
        className: 'icon-16',
      })}

      <span>{text}</span>
    </Link>
  )
}
