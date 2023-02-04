import '../styles/globals.css'

import { Poppins } from '@next/font/google'
import type { ReactNode } from 'react'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pl">
    <head />
    <body className={poppins.className}>
      <main className="my-0 max-md:px-4 py-32 mx-auto w-full max-w-screen-mediumDesktop px-8">
        {children}
      </main>
    </body>
  </html>
)

export default RootLayout
