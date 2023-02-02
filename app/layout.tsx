import '../styles/globals.css'
import { Poppins } from '@next/font/google'

import type { ReactNode } from 'react'

const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
})

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang='pl'>
			<head />
			<body className={poppins.className}>{children}</body>
		</html>
	)
}

export default RootLayout
