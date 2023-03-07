'use client'

import { Tab } from '@headlessui/react'
import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useQueryParams } from 'hooks/useQueryParams'
import { useContext, useEffect } from 'react'

import { TabsIndexContext } from './index-context'

const tabsCva = cva(
  [
    'relative text-darkAlpha-40 font-medium outline-none whitespace-nowrap',
    'hover:bg-darkAlpha-5 transition-colors',
  ],
  {
    variants: {
      size: {
        large: ['text-label-lg', 'px-7', 'py-5'],
        medium: ['text-label-md', 'px-5', 'py-[0.875rem]'],
        small: ['text-label-md', 'px-4', 'py-[0.625rem]'],
      },
      desktopSize: {
        large: [''],
        medium: ['md:text-label-lg', 'md:px-7', 'md:py-5'],
        small: [''],
      },
    },
  },
)

interface TabsProps extends VariantProps<typeof tabsCva> {
  tabs: string[]
  children: React.ReactElement[]
  className?: string
}

const Tabs = ({ size, tabs, children, desktopSize, className }: TabsProps) => {
  const { tabIndex, setTabIndex } = useContext(TabsIndexContext)
  const { pathname, router, params, key } = useQueryParams('tab')

  useEffect(() => {
    const getTabIndex = () => {
      switch (params) {
        case 'przegląd':
          return 0
        case 'kariera':
          return 1
        case 'mecze':
          return 2
        case 'playmaker score':
          return 3
        default:
          return 0
      }
    }

    setTabIndex(getTabIndex())
  }, [params, setTabIndex])

  const getScrollInline = (name: string) => {
    if (tabs[0] === name) return 'end'
    if (tabs[tabs.length - 1] === name) return 'start'
    return 'nearest'
  }

  return (
    <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
      <Tab.List
        className={clsx(
          'no-scrollbar z-50 flex overflow-x-auto bg-white',
          className,
        )}
      >
        {tabs.map(name => (
          <Tab
            className={tabsCva({ size, desktopSize })}
            key={name}
            onClick={(e: any) => {
              router.push(`${pathname}?${key}=${name.toLowerCase()}`)
              setTimeout(() => {
                e.target.scrollIntoView({
                  behavior: 'smooth',
                  inline: getScrollInline(name),
                  block: 'nearest',
                })
              }, 100)
            }}
          >
            {({ selected }) => (
              <>
                {selected && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full bg-primaryShade-50 shadow-[0_-1px_6px_rgba(242,24,61,0.24)] md:h-[3px]"
                    layoutId="tabs-selected-underline"
                  />
                )}
                <span
                  className={clsx('relative', selected && 'text-transparent')}
                >
                  {name}
                  <span
                    className={clsx(
                      'absolute left-0 font-bold text-dark',
                      !selected && 'text-transparent',
                    )}
                  >
                    {name}
                  </span>
                </span>
              </>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="z-10 flex flex-1">
        <AnimatePresence mode="wait">
          <Tab.Panel
            className="max-w-full flex-1"
            key={`tab-panel-${tabIndex}`}
            as={motion.div}
            initial={{ opacity: 0.4, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.25,
              y: { type: 'tween' },
              delay: 0,
            }}
            static
          >
            {children[tabIndex]}
          </Tab.Panel>
        </AnimatePresence>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
