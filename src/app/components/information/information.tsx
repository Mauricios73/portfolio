import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Linguas"/>
         <div className="language-info">
            <span>En - Básico</span>
            <span>Pt-Br - Nativo</span>
         </div>
         <SectionTitle text="Educação"/>
         <div className="educational-info">
          <span>👨‍🎓 </span>
          <span>AMPLI, Ponta Grossa CIBERSEGURANÇA Conclusão Prevista: Julho 2024</span>
         </div>
       </div>
    )
}