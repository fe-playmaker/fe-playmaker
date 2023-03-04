import { useContext } from 'react'

import { TabsIndexContext } from '@/components/common/Tabs/index-context'

export const useGoToTab = () => {
  const { setTabIndex } = useContext(TabsIndexContext)

  const goToTab = (idx: number) => {
    let lastScroll = 999999999
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
