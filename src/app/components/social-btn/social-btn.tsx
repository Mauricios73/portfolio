import { GithubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="socialbtn">
            <a href="https://www.linkedin.com/in/mauricio-portela/">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/Mauricios73">
                <GithubIcon/>
            </a>
        </div>
    )
}