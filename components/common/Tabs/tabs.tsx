'use client'

import { Tab } from '@headlessui/react'
import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Fragment, useContext, useEffect, useState } from 'react'

import { TabsIndexContext } from './index-context'

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
  const {
    data: [helperTabIndex, prevHelperTabIndex],
    setHelperTabIndex,
  } = useContext(TabsIndexContext)
  const [tabIndex, setTabIndex] = useState(0)
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile')

  useEffect(() => {
    setTabIndex(helperTabIndex)
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 720) setDevice('desktop')
      else setDevice('mobile')
    }
  }, [helperTabIndex, setTabIndex])

  const getVariants = (): Variants => {
    const variants = {
      init: {
        x: 0,
        y: 0,
        opacity: 0.4,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
      },
      exit: {
        x: 0,
        y: 0,
        opacity: 0.4,
      },
    }

    if (device === 'mobile') {
      if (prevHelperTabIndex === -1) variants.init.x = 0
      else {
        // @ts-ignore
        variants.init.x = helperTabIndex > prevHelperTabIndex ? '100%' : '-100%'
      }
      // @ts-ignore
      variants.exit.x = helperTabIndex > prevHelperTabIndex ? '-100%' : '100%'
    } else {
      // desktop

      variants.init.y = -20
      variants.exit.y = -20
    }

    return variants
  }

  return (
    <Tab.Group selectedIndex={tabIndex} onChange={setHelperTabIndex}>
      <Tab.List className="no-scrollbar z-50 flex overflow-x-auto bg-white">
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
      <Tab.Panels className="z-10 flex flex-1">
        <AnimatePresence mode={device === 'mobile' ? 'popLayout' : 'wait'}>
          <Tab.Panel
            className="max-w-full flex-1"
            key={`tab-panel-${tabIndex}`}
            as={motion.div}
            transition={{
              duration: device === 'mobile' ? 0.7 : 0.25,
            }}
            static
            variants={getVariants()}
            initial="init"
            animate="animate"
            exit="exit"
          >
            {children[tabIndex]}
          </Tab.Panel>
        </AnimatePresence>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
