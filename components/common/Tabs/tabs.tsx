'use client'

import { Tab } from '@headlessui/react'
import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useEffect, useState } from 'react'

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
  const [[helperTabIndex, prevHelperTabIndex], setHelperTabIndex] = useState([
    0, -1,
  ])
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    setTabIndex(helperTabIndex)
  }, [helperTabIndex])

  const getInitialPanelX = () => {
    if (prevHelperTabIndex === -1) return 0

    return helperTabIndex > prevHelperTabIndex ? '100%' : '-100%'
  }

  return (
    <Tab.Group
      selectedIndex={tabIndex}
      onChange={index => setHelperTabIndex(value => [index, value[0]])}
    >
      <Tab.List className="no-scrollbar flex overflow-x-auto bg-white">
        {tabs.map(name => (
          <Tab className={tabsCva({ size })} key={name}>
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
      <Tab.Panels className="flex flex-1 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <Tab.Panel
            className="max-w-full flex-1"
            key={`tab-panel-${tabIndex}`}
            as={motion.div}
            initial={{
              x: getInitialPanelX(),
              opacity: 0.4,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: helperTabIndex > prevHelperTabIndex ? '-100%' : '100%',
              opacity: 0.4,
            }}
            transition={{ duration: 0.7 }}
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
