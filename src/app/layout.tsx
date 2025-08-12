import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/features/(navbar)'
import { Navbar } from '@/widgets/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ark Studio test task',
  description:
    'Airesto.ru is a restaurant application that simplifies their work and includes several key products: a live queue and booking management system, as well as a communication center to automate customer interaction and increase efficiency.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff8e7] dark:bg-stone-900 min-h-full`}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
