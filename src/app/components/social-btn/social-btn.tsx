import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"
export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/omauricio13/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/mauricio-portela/">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/Mauricios73">
                <GithubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}