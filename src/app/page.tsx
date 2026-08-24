import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import { Projects } from './components/projects/projects'
import { Architecture } from './components/architecture/architecture'
import { Roadmap } from './components/roadmap/roadmap'
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btn/social-btn'
import './styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      <nav className="site-nav">
        <a href="#inicio">MP<span>.</span></a>
        <div>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#arquitetura">Arquitetura</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="intro" id="inicio">
        <span className="eyebrow">CYBERSECURITY / WIRELESS / EMBEDDED</span>
        <h1>Construindo sistemas, explorando redes e aprendendo segurança.</h1>
        <p>Sou Mauricio Portela. Meu foco atual está em segurança cibernética, redes Wi-Fi e sistemas embarcados. Transformo ideias em projetos reais com ESP32, C/C++, software e tecnologias web.</p>
        <div className="hero-links">
          <a className="primary-btn" href="#projetos">Ver projetos ↓</a>
          <a className="text-btn" href="https://github.com/Mauricios73" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <Experience />
      <Projects />
      <Architecture />
      <Roadmap />
      <Info />

      <section className="contact-panel" id="contato">
        <span className="eyebrow">CONTATO</span>
        <h2>Vamos construir algo?</h2>
        <p>Estou usando este espaço para documentar projetos, experimentos e minha evolução técnica.</p>
        <div className="buttons">
          <SocialBtns />
          <a className="primary-btn" href="mailto:mauricioportela73@gmail.com">Entrar em contato <EmailIcon /></a>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Mauricio Portela · Cybersecurity / Wireless / Embedded</footer>
    </main>
  )
}
