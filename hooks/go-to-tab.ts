import { useContext } from 'react'

import { TabsIndexContext } from '@/components/common/Tabs/index-context'

import { useQueryParams } from './useQueryParams'

export const useGoToTab = () => {
  const { setTabIndex } = useContext(TabsIndexContext)
  const { router, pathname, key } = useQueryParams('tab')

  const goToTab = (idx: number, tabName: string) => {
    let lastScroll = 999999999

    router.push(`${pathname}?${key}=${tabName}`)

    window.scroll({
      top: 0,
      behavior: 'smooth',
    })

    const onscroll = () => {
      if (window.scrollY === 0) {
        window.removeEventListener('scroll', onscroll)
        setTabIndex(idx)
      }
      if (window.scrollY > lastScroll) {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        lastScroll = window.scrollY
      }
    }

    window.addEventListener('scroll', onscroll)
  }

  return { goToTab }
}
