import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModalCover } from '@/components/Index'


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
      <body className={inter.className + " bg-slate-100 text-slate-900" }>
        {children}
        <ModalCover />

      </body>
    </html>
  )
}
