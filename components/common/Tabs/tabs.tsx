'use client'

import { Tab } from '@headlessui/react'
import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRef } from 'react'

// missing - disabled, disabled-selected

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
    },
  },
)

interface TabsProps extends VariantProps<typeof tabsCva> {
  tabs: string[]
  children: React.ReactElement[]
}

const Tabs = ({ size, tabs, children }: TabsProps) => {
  const tabContainerRef = useRef<HTMLDivElement | null>(null)
  const tabContainer = tabContainerRef.current

  const firstTab = tabs[0]
  const lastTab = tabs[tabs.length - 1]

  const scrollHandler = (direction: string) => {
    if (!tabContainer) return

    const positionOfTabsContainer =
      tabContainer.scrollWidth - tabContainer.clientWidth

    if (direction === 'left') {
      tabContainerRef.current?.scrollTo({
        left: positionOfTabsContainer,
        behavior: 'smooth',
      })
    } else {
      tabContainerRef.current?.scrollTo({
        left: -positionOfTabsContainer,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Tab.Group>
      <Tab.List
        ref={tabContainerRef}
        className="no-scrollbar flex overflow-x-auto bg-white"
      >
        {tabs.map(name => (
          <Tab
            onClick={() => {
              if (lastTab === name) scrollHandler('left')
              else if (firstTab === name) scrollHandler('right')
            }}
            className={tabsCva({ size })}
            key={name}
          >
            {({ selected }) => (
              <>
                {selected && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-primaryShade-50 shadow-[0_-1px_6px_rgba(242,24,61,0.24)]"
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
      <Tab.Panels className="flex flex-1">
        {children.map((panel, id) => (
          <Tab.Panel key={tabs[id]} className="max-w-full flex-1">
            {panel}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
