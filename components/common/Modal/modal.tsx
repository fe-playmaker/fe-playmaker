import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ModalContent from './content'
import ModalFooter from './footer'
import ModalHeader from './header'
import { IModalProps } from './types'
import { desktopVariants, mobileVariants } from './variants'

const Modal = ({ children, show, ...props }: IModalProps) => {
  const [showFog, setShowFog] = useState(false)
  const [showHeaderBar, setShowHeaderBar] = useState(false)
  const [showFooterBar, setShowFooterBar] = useState(false)
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile')

  useEffect(() => {
    if (window.innerWidth >= 1200) setDevice('desktop')
    else setDevice('mobile')
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 z-[90] flex h-screen w-screen items-end bg-darkAlpha-20 md:justify-end"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween' }}
          key="modalxx"
        >
          <motion.div
            className="flex max-h-full w-full flex-col bg-white md:h-full md:w-[30rem]"
            variants={device === 'mobile' ? mobileVariants : desktopVariants}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ModalHeader {...props} showBar={showHeaderBar} />
            <ModalContent
              setShowFog={setShowFog}
              setShowHeaderBar={setShowHeaderBar}
              setShowFooterBar={setShowFooterBar}
            >
              {children}
            </ModalContent>
            <ModalFooter {...props} showFog={showFog} showBar={showFooterBar} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
