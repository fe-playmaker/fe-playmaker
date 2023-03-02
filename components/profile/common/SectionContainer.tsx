import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props extends React.ComponentProps<typeof motion.section> {
  children: ReactNode
  className?: string
}

export const SectionContainer = ({ children, className, ...props }: Props) => (
  <motion.section
    className={clsx('bg-white px-6 py-8 md:px-8', className)}
    {...props}
  >
    {children}
  </motion.section>
)
