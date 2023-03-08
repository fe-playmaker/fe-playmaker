import { ReactNode, useEffect, useRef } from 'react'

interface IProps {
  children: ReactNode
  setShowFog: (val: boolean) => void
  setShowHeaderBar: (val: boolean) => void
  setShowFooterBar: (val: boolean) => void
}

const ModalContent = ({
  children,
  setShowFog,
  setShowHeaderBar,
  setShowFooterBar,
}: IProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const scrollable = ref.current.scrollHeight > ref.current.clientHeight
      setShowFog(scrollable)
      setShowFooterBar(scrollable)
    }
  }, [])

  return (
    <div
      className="overflow-y-auto px-6 md:flex-1 md:px-8"
      ref={ref}
      onScroll={() => {
        if (!ref.current) return
        setShowHeaderBar(ref.current.scrollTop > 0)
        setShowFog(
          ref.current.scrollTop + ref.current.clientHeight !==
            ref.current.scrollHeight,
        )
        setShowFooterBar(
          ref.current.scrollTop + ref.current.clientHeight !==
            ref.current.scrollHeight,
        )
      }}
    >
      {children}
    </div>
  )
}

export default ModalContent
