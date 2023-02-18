'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
}

export const TabContentWrapper = ({ children, className }: IProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0.2, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.1 }}
  >
    {children}
  </motion.div>
)
