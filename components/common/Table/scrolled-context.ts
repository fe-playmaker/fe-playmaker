import { createContext, Dispatch, SetStateAction } from 'react'

interface Context {
  isScrolled: boolean
  setIsScrolled: Dispatch<SetStateAction<boolean>>
}
export const TableScrolledContext = createContext<Context>({
  isScrolled: false,
  setIsScrolled: () => {},
})
