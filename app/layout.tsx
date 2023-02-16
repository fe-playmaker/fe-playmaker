import '../styles/globals.css'

import { Inter, Poppins } from '@next/font/google'

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

const RootLayout = ({ children }: { children: React.ReactElement }) => (
  <html lang="pl">
    <head />
    <body className={`${poppins.variable} ${inter.variable} font-poppins`}>
      <ReactQueryWrapper>
        <div className=" mx-auto w-full max-w-screen-mediumDesktop">
          {children}
        </div>
      </ReactQueryWrapper>
    </body>
  </html>
)

export default RootLayout
