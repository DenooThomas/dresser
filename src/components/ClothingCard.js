import "./clothingCardStyling.css"
import { ClothingContext } from "../context/ClothingContext"
import React, { useContext } from "react"

export default function ClothingCard(props){
    const {clothingData, handleClick, getPersonIDs, removeItem, cart, removeFromCart} = useContext(ClothingContext)

    const personIDs = getPersonIDs()

    const cardElements = clothingData.map(clothingObj => {
        const isAlreadyAdded = cart.includes(clothingObj.id)
        if(props.cardType === "confirm"){
            return personIDs.map(id => {
                if(clothingObj.id === id ){
                    return (
                        <div key={clothingObj.id} className="card-option-cont">
                            <div className="card-text-cont-start">
                                <h3 className="card-title">{clothingObj.title} {isAlreadyAdded && "(in cart)"}</h3>
                                <p className="card-text">{clothingObj.description}</p>
                            </div>
                            <div className="option-cont-right">
                                <div className="apart-flex-end">
                                    <p>Price: ${clothingObj.price}</p>
                                    <button className="selector-option-button" onClick={() => removeItem(clothingObj.category)}>Remove</button>
                                </div>
                                <img src={clothingObj.image} alt="clothing option" className="card-img" />
                            </div>
                            
                        </div>
                    )
                }
                return null
            })
        }
        else if(props.cardType === "dresser"){
                if(clothingObj.category === props.category ){
                    return (
                        <div key={clothingObj.id} className="selector-option-cont">
                            <div className="selector-text-cont-apart">
                                <p>{clothingObj.title} {isAlreadyAdded && "(in cart)"}</p>
                                <div className="selector-button-cont">
                                    <button onClick={() => handleClick(clothingObj.id, clothingObj.category, clothingObj.image)} className="selector-option-button">Try on</button>
                                    {isAlreadyAdded && <button onClick={() => removeFromCart(clothingObj.id)} className="selector-option-button">Remove from cart</button>}
                                </div>
                            </div>
                            <img src={clothingObj.image} alt="clothing option" className="card-img" />
                        </div>
                    )
                }
        }
        else if(props.cardType === "cart"){
            return cart.map(cartID => {
                if(clothingObj.id === cartID){
                    return (
                        <div key={clothingObj.id} className="card-option-cont">
                            <div className="card-text-cont-start">
                                <h3 className="card-title">{clothingObj.title}</h3>
                                <p className="card-text">{clothingObj.description}</p>
                            </div>
                            <div className="option-cont-right">
                                <div className="apart-flex-end">
                                    <p>Price: ${clothingObj.price}</p>
                                    <button className="selector-option-button" onClick={() => removeFromCart(clothingObj.id)}>Remove</button>
                                </div>
                                <img src={clothingObj.image} alt="clothing option" className="card-img" />
                            </div>
                        </div>
                    )
                }
                return null
            }) 
        }
        else if(props.cardType === "checkout"){
            return cart.map(cartID => {
                if(clothingObj.id === cartID){
                    return (
                        <div key={clothingObj.id} className="card-option-cont">
                        <div className="option-cont-left">
                        <img src={clothingObj.image} alt="clothing option" className="card-img" />
                            <div className="card-text-cont-start">
                                <h3>{clothingObj.title}</h3>
                                <p className="card-text">{clothingObj.description}</p>
                            </div>
                        </div>
                            
                        <div className="option-cont-right">
                            <div className="apart-flex-end">
                                <p>Price: ${clothingObj.price}</p>
                                <button className="selector-option-button" onClick={() => removeFromCart(clothingObj.id)}>Remove</button>
                            </div>
                            
                        </div>
                    </div>
                    )
                }
                return null
            }) 
        }
       return null
    })
        return (
            <React.Fragment>
                {cardElements}
            </React.Fragment>
        )
    }