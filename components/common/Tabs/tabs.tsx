'use client'

import { Tab } from '@headlessui/react'
import { cva, VariantProps } from 'class-variance-authority'

// missing - disabled, disabled-selected

const tabsCva = cva(
  [
    'relative text-darkAlpha-40 font-medium outline-none whitespace-nowrap',
    'hover:bg-darkAlpha-5 transition-colors',
    'ui-selected:font-bold ui-selected:text-dark',
    "ui-selected:after:absolute after:content-[''] after:h-[2px] after:bg-primaryShade-50 after:w-full after:bottom-[0] after:left-[0] after:shadow-[0_-1px_6px_rgba(242,24,61,0.24)]",
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

const Tabs = ({ size, tabs, children }: TabsProps) => (
  <Tab.Group>
    <Tab.List className="flex overflow-x-auto bg-white">
      {tabs.map(name => (
        <Tab className={tabsCva({ size })} key={name}>
          {name}
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

export default Tabs
