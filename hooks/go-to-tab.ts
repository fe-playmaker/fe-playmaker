import { useContext } from 'react'

import { TabsIndexContext } from '@/components/common/Tabs/index-context'

import { usePushQueryParams } from './usePushQueryParams'

export const useGoToTab = () => {
  const { setTabIndex } = useContext(TabsIndexContext)
  const pushQueryParams = usePushQueryParams()

  const goToTab = (idx: number, tabName: string) => {
    let lastScroll = 999999999

    pushQueryParams({ key: 'tab', value: tabName })

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
