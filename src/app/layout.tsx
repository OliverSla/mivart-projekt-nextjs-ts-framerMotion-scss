import '@/styles/globals.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/layouts/header/Header'

export const metadata: Metadata = {
  title: 'Mivart - Praktická úloha',
  description: 'Praktická úloha - Oliver Sladkovský'
}

const myriadProFont = localFont({
  src: [
    {
      path: '../../public/fonts/MyriadPro-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/MyriadPro-It.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/MyriadPro-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/MyriadPro-LightIt.woff',
      weight: '300',
      style: 'italic'
    }
  ],
  variable: '--font-primary'
})

const mostraNuovaFont = localFont({
  src: [
    {
      path: '../../public/fonts/MostraNuova-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/MostraNuova-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/MostraNuova-Regular.woff',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-secondary'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${myriadProFont.variable} ${mostraNuovaFont.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
