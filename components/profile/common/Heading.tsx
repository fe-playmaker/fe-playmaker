import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { ComponentProps, ReactNode } from 'react'

interface Props extends ComponentProps<typeof motion.h4> {
  children: ReactNode
  className?: string
}

export const Heading = ({ children, className, ...props }: Props) => (
  <motion.h4
    className={clsx(
      'pb-5 font-poppins text-heading-xs font-bold text-dark md:pb-7 md:text-heading-smaller',
      className,
    )}
    {...props}
  >
    {children}
  </motion.h4>
)
