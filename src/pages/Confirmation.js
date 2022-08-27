import React, { useContext } from "react"
import { Link } from "react-router-dom"

import "./confirmationStyling/confirmationStyling.css"
import { ClothingContext } from "../context/ClothingContext"
import ClothingCardGen from "../components/ClothingCardGen"


export default function Confirmation(){

    const {addToCart, getPersonIDs, getTotalPrice} = useContext(ClothingContext)

    
    console.log(getTotalPrice())

    return (
        <React.Fragment>
                <ClothingCardGen cardType="confirm"/>
            <div className="confirm-button-cont">
                <Link to="/dresser" onClick={() => addToCart(getPersonIDs())} className="confirm-button">Add to cart & keep shopping</Link>
                <Link to="/checkout" onClick={() => addToCart(getPersonIDs())} className="confirm-button">Checkout</Link>
            </div>
        </React.Fragment>
    )
}