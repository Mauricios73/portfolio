import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import { Projects } from './components/projects/projects'
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btn/social-btn'
import './styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      <Header />
      <section className="intro">
        <span className="eyebrow">CYBERSECURITY / WIRELESS / EMBEDDED</span>
        <h1>Construindo sistemas, explorando redes e aprendendo segurança.</h1>
        <p>Meu foco atual está em segurança cibernética, redes Wi-Fi e sistemas embarcados. Gosto de transformar ideias em projetos reais, principalmente com ESP32, C/C++ e tecnologias web.</p>
      </section>
      <Experience />
      <Projects />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="primary-btn" href="mailto:mauricioportela73@gmail.com">Contato <EmailIcon /></a>
      </div>
    </main>
  )
}
