import './roadmap.scss'

const stages = [
  ['Agora', 'WiFiCore', 'Infraestrutura do Core, captura, parser 802.11, EventBus e armazenamento.'],
  ['Próximo', 'Interfaces', 'TFT, dashboard Web, arquivos no SD e monitoramento do dispositivo.'],
  ['Depois', 'Inteligência', 'Experimentação com agentes, comportamento adaptativo e modelos embarcados.'],
]

export function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div className="section-heading"><span>05</span><h2>Roadmap</h2></div>
      <div className="roadmap-list">
        {stages.map(([phase, title, text], index) => (
          <article key={phase}><span className="roadmap-index">0{index + 1}</span><div><small>{phase}</small><h3>{title}</h3><p>{text}</p></div></article>
        ))}
      </div>
    </section>
  )
}
