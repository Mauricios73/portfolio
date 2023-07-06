import './globals.scss'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], 
weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Mauricio Portela',
  description: 'Mauricio Portela is a FrontEnd Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
