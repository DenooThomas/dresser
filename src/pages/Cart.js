import { Link } from "react-router-dom"
import React, { useContext } from "react";

import { ClothingContext } from "../context/ClothingContext";
import ClothingCardGen from "../components/ClothingCardGen";

export default function Cart(){
    const {addToCart, getPersonIDs, cart, getTotalPrice} = useContext(ClothingContext)

    return (
        <div>
            {cart.length > 0 ? 
            <React.Fragment>
            <h1 className="pageTitle">Your shopping cart contains...</h1>
            <ClothingCardGen cardType="cart"/>
            <h2 className="totalPrice">Total: ${getTotalPrice()}</h2>
            <div className="confirm-button-cont">
                <span></span>
                <Link to="/checkout" onClick={() => addToCart(getPersonIDs())} className="confirm-button">Checkout</Link>
            </div>
            </React.Fragment>
            :
            <React.Fragment>
            <h1>There are no items in your cart</h1>
            <h2>Start shopping now!</h2>
            <div className="confirm-button-cont">
                <Link to="/dresser" className="confirm-button">Start shopping</Link>
            </div>
            </React.Fragment>
            }
        </div>
        
    )
}