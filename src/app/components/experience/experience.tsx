import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"
import Image from "next/image";


export function Experience(){
    return(
        <div className="experience">
         <SectionTitle text="Experiência"/>
         <p>Sou estudante de CiberSegurança e tenho um
            muito interesse na área de TI, busco um estágio
            que me proporcione experiência prática e a
            oportunidade de aplicar meus conhecimentos em
            ambientes reais. </p>

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
                        <div className="experience-measure measure-3">
                            <span> 3/10</span>
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
                        <div className="experience-measure measure-3">
                            <span>3/10</span>     
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
