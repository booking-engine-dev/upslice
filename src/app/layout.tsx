import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Upslice | Drive Digital Growth — Premium Digital Marketing Agency',
  description: 'Scale your business with elite digital marketing, SEO, GEO, paid media, and omnichannel strategies designed for explosive growth.',
  keywords: 'digital marketing agency, SEO services, growth marketing, paid media, conversion optimization, Upslice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090a0f] text-gray-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
