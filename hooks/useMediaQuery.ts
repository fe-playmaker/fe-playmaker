import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  const update = (e: MediaQueryListEvent) => {
    setMatches(e.matches)
  }

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return matches
}

export default useMediaQuery
