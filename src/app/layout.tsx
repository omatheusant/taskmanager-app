import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Poppins, Victor_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Task Manager APP',
  description: 'Simple task manager full-stack aplication',
}

const victorMono = Victor_Mono({
  subsets: ['latin'],
  variable: '--font-victor-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["100", "200", "300", "400", "700", "900"] 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`w-full bg-secondary ${victorMono.variable} ${poppins.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
