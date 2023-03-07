'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParams = (key?: string) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = searchParams.get(key ?? '/')

  return { params, searchParams, router, pathname, key }
}
