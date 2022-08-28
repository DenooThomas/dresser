import { Link } from "react-router-dom"

import "./footerStyling/footerStyling.css"

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-copy">© Dressy - {currentYear} - no rights reserved</p>
            <div>
                <Link to="/" className="header-option">Home</Link>
                <Link to="dresser" className="header-option">Dresser</Link>
            </div>
        </footer>
    )
}