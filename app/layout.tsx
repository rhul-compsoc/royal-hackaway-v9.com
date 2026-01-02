import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactElement, ReactNode } from 'react'

const kollektif = localFont({
  src: [
    {
      path: './fonts/Kollektif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Kollektif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Kollektif-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Kollektif-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

const metadata: Metadata = {
  title: 'Royal Hackaway v9',
  description: 'Official website of Royal Hackaway v9!',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${kollektif.className} antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout

export { metadata }
