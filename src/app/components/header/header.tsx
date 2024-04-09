import Image from 'next/image'
import './header.scss'

export function Header(){
    return(
        <div className="header">
                <div>
                    <h1>{"Olá"}, 👋</h1>
                    <h1>{"Eu sou Mauricio Portela!"} </h1>
                    <h2>{"Desenvolvedor Front-end"}</h2>
                </div>
            <Image
                src="/me.jpg"
                alt="ME"
                width={265}
                height={270}
                priority
            />
        </div>
    )
}