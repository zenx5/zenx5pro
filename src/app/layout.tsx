import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Background from '@/components/Background'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zenx5\'s Site',
  description: '',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " relative h-screen w-screen bg-white" }>
          {children}
      </body>
    </html>
  )
}
