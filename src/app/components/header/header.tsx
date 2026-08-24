import Image from 'next/image'
import './header.scss'

export function Header(){
  return(
    <header className="header">
      <div>
        <p className="header-kicker">MAURICIO PORTELA</p>
        <h1>Olá, eu sou Mauricio.</h1>
        <h2>Cybersecurity · Wireless · Embedded Systems</h2>
      </div>
      <Image src="/me.jpg" alt="Mauricio Portela" width={265} height={270} priority />
    </header>
  )
}
