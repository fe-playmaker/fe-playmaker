'use client'

import { usePathname, useRouter } from 'next/navigation'
import qs from 'qs'

export const usePushQueryParams = () => {
  const router = useRouter()
  const pathname = usePathname()

  const pushQueryParams = (newParams: { [key: string]: string }) => {
    const queryString = qs.stringify({ ...newParams }, { encode: false })

    router.push(`${pathname}?${queryString}`)
  }

  return pushQueryParams
}
