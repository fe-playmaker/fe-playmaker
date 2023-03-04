import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props extends React.ComponentProps<typeof motion.h4> {
  children: ReactNode
  className?: string
}

export const Heading = ({ children, className, ...props }: Props) => (
  <motion.h4
    className={clsx(
      'pb-5 font-poppins text-heading-xs font-bold text-dark',
      className,
    )}
    {...props}
  >
    {children}
  </motion.h4>
)
