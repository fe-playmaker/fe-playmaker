import { createContext } from 'react'

interface IContext {
  data: [helperTabIndex: number, prevHelperTabIndex: number]
  setHelperTabIndex: (idx: number) => void
}

export const TabsIndexContext = createContext<IContext>({
  setHelperTabIndex: () => {},
  data: [0, -1],
})
