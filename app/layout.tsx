import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'wire-to-ui ::  Generate Tailwind HTML/CSS based on a wireframe',
	description: 'This is an app that uses tldraw and the gpt-4-vision api to generate tailwind html/css based on a wireframe you draw.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
