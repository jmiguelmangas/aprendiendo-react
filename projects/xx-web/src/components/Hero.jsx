import "./Hero.css"
import { PrimaryText } from "./HeroComponents/PrimaryText"

export function HeroSection (){
    return (
        <section className="Hero">
            <section className="text"><PrimaryText/></section>
            <section className="locationAndButton"></section>
            <section className="secondtext"></section>
            <section className="CenterHero"></section>
            <section className="Javascript"></section>
            <section className="Python"></section>
            <section className="DataScientist"></section>
            <section className="ReactDeveloper"></section>
        </section>
    )
}