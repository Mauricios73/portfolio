import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btn/social-btn'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <Info/>

         <div className="buttons">
          <SocialBtns/>

          <a className='primary-btn' href='mailto:mauricioportela72@gmail.com'>
            contact me!
            <EmailIcon/>
            </a>
         </div>
    </main>
  )
}