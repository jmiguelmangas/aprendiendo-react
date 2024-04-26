import "./Menu.css"
export function Menu() {
    const arrayMenu = ["Inicio","Sobre Mi","Experiencia","Portfolio","Contacto"]
    const elements = arrayMenu.map((element) =><li><a href="">{element}.</a></li>)
    return(
        <ul className="menu">
            {elements}
        </ul>
        
    )
}