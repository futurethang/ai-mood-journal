import './globals.css'
import { Roboto_Serif } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const roboto = Roboto_Serif({ subsets: ['latin'], display: 'swap' })
export const metadata = {
  title: 'AI Mood Tracking Journa;',
  description:
    'Write your daily thoughts, and see how your mood changes over time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.className} prose`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
