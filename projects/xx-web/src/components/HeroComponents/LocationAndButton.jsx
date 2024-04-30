import "./LocationAndButton.css"
const location = ["Madrid","Spain"]
import { Location } from "./LocationandButtonComponents/Location"
import { ButtonContact } from "./LocationandButtonComponents/Button"
import { LinkedInButton } from "./LocationandButtonComponents/Linkedin"
import { GitHubButton } from "./LocationandButtonComponents/Github"
export function LocationAndButton (){
    return(
        <section className="locationAndButton">
            <Location location={location}/>
            <LinkedInButton />
            <GitHubButton />
            <ButtonContact className="contactButton"/>
        </section>
    )
}