import { createContext } from 'react'

interface IContext {
  tabIndex: number
  setTabIndex: (idx: number) => void
}

export const TabsIndexContext = createContext<IContext>({
  setTabIndex: () => {},
  tabIndex: 0,
})
