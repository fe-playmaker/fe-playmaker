import '../styles/globals.css'

import { Inter, Poppins } from '@next/font/google'

import Navbar from '@/components/Navbar/navbar'
import NavbarDesktop from '@/components/Navbar/navbar-desktop'

import { ReactQueryWrapper } from './ReactQueryWrapper'

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

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl">
    <head />
    <body
      className={`${poppins.variable} ${inter.variable} bg-light font-poppins`}
    >
      <ReactQueryWrapper>
        <div className="flex min-h-screen flex-col">
          <NavbarDesktop />
          <Navbar />
          <div className="mx-auto flex w-full max-w-screen-md flex-1">
            {children}
          </div>
        </div>
      </ReactQueryWrapper>
    </body>
  </html>
)

export default RootLayout
