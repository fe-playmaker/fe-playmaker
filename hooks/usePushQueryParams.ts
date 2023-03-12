'use client'

import { useRouter } from 'next/dist/client/router'
import { usePathname, useSearchParams } from 'next/navigation'

export const usePushQueryParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pushQueryParams = (key: string) => {
    router.push(`${pathname}`, { query: { param: 'value' } })
  }

  return pushQueryParams
}
