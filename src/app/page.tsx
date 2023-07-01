import { Header } from './components/header/header'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <div className="experience">
         <h3>Experience</h3>
         <p>Texto</p>
         <div className="experience-time">

         </div>
         <div className="infos">
          <h3>Languages</h3>
           <div className="language-info">
              <span>En - Basic</span>
              <span>Pt-Br - Native Speaker</span>
           </div>
           <h3>Education</h3>
           <div className="educational-info">
            <span>emoji</span>
            <span>Texto</span>
           </div>
         </div>
         <div className="buttons">
          <div className="social">

          </div>
          <button>contact me!</button>
         </div>
      </div>
    </main>
  )
}