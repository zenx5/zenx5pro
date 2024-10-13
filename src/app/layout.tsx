import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from "@/sections/Header";


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
        <div className="flex flex-col gap-5 items-center justify-center h-auto py-20">
          <Header />
          <div className="w-full max-w-4xl grid md:grid-cols-3 grid-cols-1 gap-5 md:mx-auto mx-5">
            {children}
          </div>
      </div>
      </body>
    </html>
  )
}
