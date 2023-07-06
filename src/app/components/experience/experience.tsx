import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"
import Image from "next/image";

export function Experience(){
    return(
        <div className="experience">
         <SectionTitle text="Experience"/>
         <p>Sou um estudante de Cibersegurança apaixonado por desenvolvimento Front-end, buscando uma oportunidade de estágio para aplicar meus conhecimentos e adquirir experiência prática no desenvolvimento web. </p>

            <div className="experience-time">
                <div className="experience-language">
                    <Image
                        src="/Meu projeto.png"
                        alt="Python Logo"
                        width={45}
                        height={35}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-6">
                            <span>6/10</span>     
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/js.png"
                        alt="JavaScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-4">
                            <span>4/10</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/react.png"
                        alt="React Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span> 2/10</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/ts.png"
                        alt="TypeScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2/10</span>     
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
