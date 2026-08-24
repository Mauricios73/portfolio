import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
  return(
    <section className="infos" id="contato">
      <SectionTitle text="Perfil"/>
      <div className="language-info">
        <span>Português — Nativo</span>
        <span>Inglês — Em desenvolvimento</span>
      </div>
      <SectionTitle text="Foco atual"/>
      <div className="educational-info">
        <span>→</span>
        <span>Cybersecurity, Network Security, Wireless Security e Embedded Systems.</span>
      </div>
    </section>
  )
}
