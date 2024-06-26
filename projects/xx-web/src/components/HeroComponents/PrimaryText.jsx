import "./PrimaryText.css"
import avatar from "./images/avatar.webp"
export function PrimaryText () {
    return(
        <div className="container">
            <div className="avatar"><img src= {avatar} alt="avatar" className="avatarImg"/></div>
            <div className="description"><p className="descriptionText"><span className="name">I'm Jose Miguel Mangas, a Javascript and Python Developer.</span> I'm passionate about coding and constantly expanding my skills. After mastering Python and JavaScript, I'm now diving into React to further enhance my abilities.</p></div>
        </div>
    )
}