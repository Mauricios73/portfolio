import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Language"/>
         <div className="language-info">
            <span>En - Basic</span>
            <span>Pt-Br - Native Speaker</span>
         </div>
         <SectionTitle text="Education"/>
         <div className="educational-info">
          <span>👨‍🎓 </span>
          <span>AMPLI, Ponta Grossa CIBERSEGURANÇA Conclusão Prevista: Julho 2024
</span>
         </div>
       </div>
    )
}