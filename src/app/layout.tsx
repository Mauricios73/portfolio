import './globals.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'] })

export const metadata = {
  title: 'Mauricio Portela | Cybersecurity & Embedded Systems',
  description: 'Portfolio de Mauricio Portela — Cybersecurity, Wireless Security e Embedded Systems.',
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="pt-BR"><body className={poppins.className}>{children}</body></html>
}
