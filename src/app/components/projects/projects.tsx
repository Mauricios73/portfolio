import "./projects.scss"
import { SectionTitle } from "../sectionTitle/section-title"

type Project = { number: string; status: string; title: string; description: string; tags: string[]; href: string }

const projects: Project[] = [
  { number: "01", status: "EM DESENVOLVIMENTO", title: "WiFiCore / ESPGotchi", description: "Plataforma embarcada para ESP32-S3 focada em Wi-Fi, captura e análise de frames 802.11, gerenciamento de dispositivos, estatísticas, SD, TFT e interface Web.", tags: ["ESP32-S3", "C++", "Wi-Fi", "802.11", "FreeRTOS", "SD", "TFT", "Web"], href: "https://github.com/Mauricios73/WiFiCore" },
  { number: "02", status: "EM DESENVOLVIMENTO", title: "Projeto Shinobi", description: "Projeto de jogo para explorar programação, sistemas de combate, estados, comportamento de inimigos e arquitetura de gameplay com GameMaker e GML.", tags: ["GameMaker", "GML", "Gameplay", "AI", "Architecture"], href: "https://github.com/Mauricios73/Projeto-Shinobi" }
]

export function Projects() {
  return <section className="projects" id="projetos"><SectionTitle text="Projetos em destaque" /><div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}><div className="project-card__top"><span className="project-number">{project.number}</span><span className="project-status">{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer">Ver projeto →</a></article>)}</div></section>
}
