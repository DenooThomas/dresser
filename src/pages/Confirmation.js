import { Link } from "react-router-dom"
import ClothingCard from "../components/ClothingCard"

import "./confirmationStyling.css"
import { ClothingContext } from "../context/ClothingContext"
import { useContext } from "react"

export default function Confirmation(){

    const {addToCart, getPersonIDs} = useContext(ClothingContext)

    return (
        <div className="confirm-cont">
            <div className="confirm-selector-cont">
                <ClothingCard cardType="confirm"/>
            </div>
            <div className="confirm-button-cont">
                <Link to="/dresser" onClick={() => addToCart(getPersonIDs())} className="confirm-button">Add to cart & keep shopping</Link>
                <Link to="/checkout" onClick={() => addToCart(getPersonIDs())} className="confirm-button">Checkout</Link>
            </div>
        </div>

    )
}