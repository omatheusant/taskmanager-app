import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Task Manager APP',
  description: 'Simple task manager full-stack aplication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="w-full bg-secondary" lang="en">
      <body >{children}</body>
    </html>
  )
}
