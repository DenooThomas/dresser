import React, {useContext} from "react"

import { ClothingContext } from "../context/ClothingContext"

export default function ClothingCard(props){
    
    const {removeItem, removeFromCart, handleClick} = useContext(ClothingContext)

    const {id, title, description, price, category, image, isAlreadyAdded, cardType} = props
        
    return (
        <div key={id} className="card-cont">
        {cardType === "checkout" ?
            <React.Fragment>
                <div className="card-img-cont">
                    <img src={image} className="card-img" alt="clothing option" />
                </div>
                <div className="card-option-cont">
                    <div className="card-option-content row-start">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="card-option-content row-end">
                        <p>Price: ${price}</p>
                        <button className="card-button" onClick={() => removeFromCart(id)}>Remove</button>
                    </div>
                </div>
            </React.Fragment>
            :
            <React.Fragment>
            <div className="card-option-cont">
                <div className="card-option-content row-start">
                    <h3>{title} {(cardType === "dresser" && isAlreadyAdded === true) && "(in cart)"}</h3>
                    {(cardType === "dresser" && isAlreadyAdded) && <button onClick={() => removeFromCart(id)} className="card-button">Remove from cart</button>}
                    {(cardType === "dresser" && !isAlreadyAdded) && <button onClick={() => handleClick(id, category, image)} className="card-button">Try on</button>}
                    {(cardType === "confirm" || cardType === "cart") && <p>{description}</p>}
                </div>
                <div className="card-option-content row-end">
                    <p>Price: ${price}</p>
                    {cardType === "confirm" && <button className="card-button" onClick={() => removeItem(category)}>Remove</button>}
                    {cardType === "cart" && <button className="card-button" onClick={() => removeFromCart(id)}>Remove</button>}
                </div>
                </div>
                <div className="card-img-cont">
                    <img src={image} className="card-img" alt="clothing option" />
            </div>
            </React.Fragment>}
        </div>)
}

