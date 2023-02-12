import '../styles/globals.css'

import { Inter, Poppins } from '@next/font/google'
import type { ReactNode } from 'react'

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pl">
    <head />
    <body className={`${poppins.variable} ${inter.variable} font-poppins`}>
      {children}
    </body>
  </html>
)

export default RootLayout
