import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btn/social-btn'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <Info/>

         <div className="buttons">
          <SocialBtns/>

          <a className='primary-btn' href='mailto:mauricioportela73@gmail.com'>
            contato!
            <EmailIcon/>
            </a>
         </div>
    </main>
  )
}