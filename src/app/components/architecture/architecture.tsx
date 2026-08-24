import './architecture.scss'

const layers = [
  ['01', 'Hardware', 'ESP32 / ESP32-S3, rádio Wi-Fi, TFT e armazenamento SD'],
  ['02', 'WiFi Core', 'Captura, gerenciamento de canais, parsing e eventos'],
  ['03', 'Data', 'APs, clients, estatísticas, PCAP, CSV e persistência'],
  ['04', 'Interfaces', 'TFT para o dispositivo e Web para monitoramento'],
]

export function Architecture() {
  return (
    <section className="architecture" id="arquitetura">
      <div className="section-heading"><span>04</span><h2>Como penso os sistemas</h2></div>
      <p className="architecture-lead">No WiFiCore, a ideia é separar aquisição de dados, processamento, armazenamento e interfaces. Isso permite evoluir cada parte sem transformar o firmware em um bloco monolítico.</p>
      <div className="architecture-grid">
        {layers.map(([number, title, text]) => (
          <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  )
}
