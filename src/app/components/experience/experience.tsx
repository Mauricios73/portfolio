import "./experience.scss"
import { SectionTitle } from "../sectionTitle/section-title"

const technologies = [
  ["C/C++", "Embedded"],
  ["ESP32", "Hardware"],
  ["Wi-Fi", "Networking"],
  ["TypeScript", "Web"],
  ["React / Next.js", "Web"],
  ["Git / GitHub", "Tooling"],
]

export function Experience(){
  return(
    <section className="experience" id="sobre">
      <SectionTitle text="Sobre / Stack"/>
      <p>Tenho interesse em segurança cibernética e desenvolvimento de sistemas. Atualmente concentro meus estudos e projetos em redes, Wi-Fi, ESP32 e desenvolvimento de software.</p>
      <div className="experience-time">
        {technologies.map(([name, area]) => (
          <div className="experience-language" key={name}>
            <strong>{name}</strong>
            <span>{area}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
