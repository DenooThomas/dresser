import { Link } from "react-router-dom"
import { useContext } from "react"

import { ClothingContext } from "../context/ClothingContext"
import CartIcon from "../images/shopping-cart.png";

import "./headerStyling/headerStyling.css"

export default function Header(){
    const {cart} = useContext(ClothingContext)

    return (
        <nav className="header-cont">
            <div className="header-left-cont">
                <Link to="/" className="header-option">Home</Link>
                <Link to="dresser" className="header-option">Dresser</Link>
            </div>
            <div className="header-right-cont">
                <Link to="cart">
                    <img
                        className="header-cart"
                        src={CartIcon}
                        alt="cart icon"
                        />
                </Link>
                {cart.length > 0 && <p>{cart.length}</p>}
            </div>
        </nav>
    )
}