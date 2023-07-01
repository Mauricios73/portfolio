import Image from 'next/image'
import './header.scss'

export function Header(){
    return(
        <div className="header">
                <div>
                    <h1>Hi, I'm Mauricio Portela! 👋</h1>
                    <h2>FrontEnd Developer</h2>
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