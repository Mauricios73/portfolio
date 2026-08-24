import "./projects.scss"

const projects = [
  {
    name: "WiFiCore / ESPGotchi",
    description: "Plataforma embarcada em ESP32 focada em Wi-Fi, captura e análise de redes, estatísticas, armazenamento em SD, interface TFT e Web.",
    tags: ["ESP32", "C++", "Wi-Fi", "Embedded Security"],
    href: "https://github.com/Mauricios73/WiFiCore",
    status: "Em desenvolvimento",
  },
  {
    name: "Projeto Shinobi",
    description: "Projeto de desenvolvimento de jogo e experimentação com lógica, sistemas de gameplay e programação em GML.",
    tags: ["GameMaker", "GML", "Game Development"],
    href: "https://github.com/Mauricios73/Projeto-Shinobi",
    status: "Em desenvolvimento",
  },
]

export function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="section-heading">
        <span>03</span>
        <h2>Projetos em destaque</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card__top">
              <span className="project-status">{project.status}</span>
              <span className="project-number">/</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href={project.href} target="_blank" rel="noreferrer">Ver no GitHub →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
