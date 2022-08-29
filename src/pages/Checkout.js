import React, { useContext, useState } from "react";
import ClothingCardGen from "../components/ClothingCardGen";

import { ClothingContext } from "../context/ClothingContext";
import "./checkoutStyling/checkoutStyling.css"

export default function Checkout(){
    const {clearCart, getTotalPrice} = useContext(ClothingContext)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitted(true)
            clearCart()
            setIsSubmitting(false)
        }, 4000);
    }

    const totalPrice = getTotalPrice()
        
    return (
        <div className={isSubmitted ? "checkout-cont submitted" : "checkout-cont"}>
        {!isSubmitted ?
        <React.Fragment>
            <div className="checkout-card-cont">
                <ClothingCardGen cardType="checkout"/>
                <h2 className="totalPrice">Total: ${totalPrice}</h2>
            </div> 
            <form onSubmit={handleSubmit} className="form-cont">
                <label htmlFor="firstName">First name:</label>
                <input
                    name="firstName" 
                    type="text"
                />
                <label htmlFor="lastName">Last name:</label>
                <input
                name="lastName"
                type="text"
                />
                <label htmlFor="email">Email address:</label>
                <input
                    name="email" 
                    type="email"
                />
                <label htmlFor="city">City:</label>                
                <input
                    name="city" 
                    type="text"
                />
                <label htmlFor="address">Address:</label>
                <input
                    name="address" 
                    type="text"
                />
                <div className="form-button-cont">
                    <input className="checkout-button" type="submit" value={isSubmitting ? "Sending order..." : "Confirm order"}/>
                </div>  
            </form>
            </React.Fragment>
            :
            <React.Fragment>
                <h1 className="pageTitle">Order placed</h1>
                <p>Check your e-mail for further instructions regarding the delivery of your package.</p>
            </React.Fragment>} 
        </div>
    )
}