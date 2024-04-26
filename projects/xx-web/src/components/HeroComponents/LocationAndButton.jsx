import "./LocationAndButton.css"
const location = ["Madrid","Spain"]
import { Location } from "./LocationandButtonComponents/Location"
export function LocationAndButton (){
    
    return(
        <section className="locationAndButton">
            <Location location={location} />
        </section>
    )
}