import './globals.css'
import { Crimson_Pro, Lora, Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: "--font-montserrat" })
const lora = Lora({ subsets: ['latin'], weight: ['500', '700'], variable: "--font-lora" })
const crimsonPro = Crimson_Pro({ subsets: ['latin'], weight: ['200'], variable: "--font-crimson-pro" })

export const metadata = {
  title: 'devchallenges - Interior Consultant',
  description: 'Creating a interior consultant page following the design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lora.variable} ${crimsonPro.variable} font-sans text-white bg-zinc-900`}>{children}</body>
    </html>
  )
}
