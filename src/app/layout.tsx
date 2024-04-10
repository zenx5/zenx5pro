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
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
        <ModalCover />

      </body>
    </html>
  )
}
