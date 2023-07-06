import Image from 'next/image'
import './header.scss'

export function Header(){
    return(
        <div className="header">
                <div>
                    <h1>{"Olá, eu sou Mauricio Portela!"} 👋</h1>
                    <h2>{"Desenvolvedor Front-end"}</h2>
                </div>
            <Image
                src="/me.png"
                alt="Vercel Logo"
                width={225}
                height={225}
                priority
            />
        </div>
    )
}