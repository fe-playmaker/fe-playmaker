'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const usePushQueryParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pushQueryParams = (params: Record<string, string>) => {
    const sparams = new URLSearchParams(searchParams)

    Object.entries(params).forEach(([key, value]) => sparams.set(key, value))
    router.push(`${pathname}?${sparams}`)
  }

  return pushQueryParams
}
