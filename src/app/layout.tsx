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
      <body className={inter.className }>
        {/**+ " before:content-['Z'] before:font-bold before:text-[600px] before:absolute before:flex before:items-center before:justify-center before:w-screen before:h-screen before:-z-10 before:opacity-100 before:text-center before:rotate-[135deg] before:text-shadow-[9px -10px 10px black]" */}
        {children}
        <ModalCover />

      </body>
    </html>
  )
}
