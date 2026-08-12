import './globals.css'

import { type Metadata } from 'next'
import localFont from 'next/font/local'
import { type ReactElement, type ReactNode } from 'react'

const kollektif = localFont({
  src: [
    {
      path: './fonts/Kollektif-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './fonts/Kollektif-Italic.ttf',
      style: 'italic',
      weight: '400',
    },
    {
      path: './fonts/Kollektif-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './fonts/Kollektif-BoldItalic.ttf',
      style: 'italic',
      weight: '700',
    },
  ],
})

const metadata: Metadata = {
  description: 'Official website of Royal Hackaway v9!',
  title: 'Royal Hackaway v9',
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
