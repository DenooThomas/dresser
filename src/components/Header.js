import { Link } from "react-router-dom"

import "./headerStyling.css"

export default function Header(){
    return (
        <nav className="header-cont">
            <Link to="/" className="header-option">Home</Link>
            <Link to="dresser" className="header-option">Dresser</Link>
        </nav>
    )
}