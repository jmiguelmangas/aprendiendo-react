import "./Hero.css"
import { PrimaryText } from "./HeroComponents/PrimaryText"
import { LocationAndButton } from "./HeroComponents/LocationAndButton"

export function HeroSection (){
    return (
        <section className="Hero">
            <section className="text"><PrimaryText/></section>
            <LocationAndButton/>
            <section className="secondtext"></section>
            <section className="CenterHero"></section>
            <section className="Javascript"></section>
            <section className="Python"></section>
            <section className="DataScientist"></section>
            <section className="ReactDeveloper"></section>
        </section>
    )
}