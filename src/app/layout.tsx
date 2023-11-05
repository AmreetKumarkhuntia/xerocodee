import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './css/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const font = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xerocodee',
  description: 'Xerocodee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
