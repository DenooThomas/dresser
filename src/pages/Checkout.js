import React, { useContext, useState } from "react";
import ClothingCard from "../components/ClothingCard";

import { ClothingContext } from "../context/ClothingContext";
import "./checkoutStyling.css"

export default function Checkout(){
    const {clearCart} = useContext(ClothingContext)
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
        
    return (
        <div className={isSubmitted ? "checkout-cont submitted" : "checkout-cont"}>
        {!isSubmitted ?
        <React.Fragment>
            <div className="checkout-card-cont">
                <ClothingCard cardType="checkout"/>
            </div> 
            <form onSubmit={handleSubmit} className="form-cont">
                <label htmlFor="firstName">First name:</label>
                <input
                    name="firstName"
                    className='form-text-cont' 
                    type="text"
                />
                <label htmlFor="lastName">Last name:</label>
                <input
                name="lastName"
                className='form-text-cont' 
                type="text"
                />
                <label htmlFor="email">Email address:</label>
                <input
                    name="email"
                    className='form-text-cont' 
                    type="email"
                />
                <label htmlFor="city">City:</label>                
                <input
                    name="city"
                    className='form-text-cont' 
                    type="city"
                />
                <label htmlFor="address">Address:</label>
                <input
                    name="address"
                    className='form-text-cont' 
                    type="address"
                />
                <div className="form-button-cont">
                    <input className="confirm-button" type="submit" value={isSubmitting ? "Sending order..." : "Confirm order"}/>
                </div>  
            </form>
            </React.Fragment>
            :
            <React.Fragment>
                <h1 className="card-title">Your order has been received and will be delivered shortly!</h1>
                <p>Check your e-mail for further information regarding your order.</p>
            </React.Fragment>} 
        </div>
    )
}