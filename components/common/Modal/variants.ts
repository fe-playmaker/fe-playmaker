import { Variants } from 'framer-motion'

export const desktopVariants: Variants = {
  initial: {
    x: 480,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: 480,
  },
}

export const mobileVariants: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
  },
  exit: {
    y: '100%',
  },
}
