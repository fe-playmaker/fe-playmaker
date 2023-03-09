'use client'

import { useEffect, useState } from 'react'

type Sizes = { width: number; height: number }

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Sizes>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: 0, height: 0 })
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
