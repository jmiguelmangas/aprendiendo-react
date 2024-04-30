import { Logo } from "./HeaderComponents/Logo"
import { Menu } from "./HeaderComponents/Menu"
import "./Header.css"
export function HeaderComponent () {
    return(
        <>
        <header className="header">
            <Logo />
            <Menu />
        </header>
        </>
    )
}