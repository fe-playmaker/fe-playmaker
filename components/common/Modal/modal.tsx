import { AnimatePresence, motion } from 'framer-motion'
import { useIsDesktop } from 'hooks/use-is-desktop'
import { MouseEvent, useEffect, useState } from 'react'

import ModalContent from './content'
import ModalFooter from './footer'
import ModalHeader from './header'
import { IModalProps } from './types'
import { desktopVariants, mobileVariants } from './variants'

const Modal = ({ children, show, ...props }: IModalProps) => {
  const [showFog, setShowFog] = useState(false)
  const [showHeaderBar, setShowHeaderBar] = useState(false)
  const [showFooterBar, setShowFooterBar] = useState(false)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'auto'
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 z-[90] flex w-screen items-end bg-darkAlpha-20 md:justify-end"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween' }}
          key="modalxx"
          onClick={props.closeModal}
          style={{
            height: 'min(100vh, 100dvh)',
          }}
        >
          <motion.div
            className="flex max-h-full w-full flex-col bg-white md:h-full md:w-[30rem]"
            variants={isDesktop ? desktopVariants : mobileVariants}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={{ type: 'tween', duration: 0.3 }}
            onClick={(e: MouseEvent) => e.stopPropagation()}
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
