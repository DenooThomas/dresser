import React, { useContext } from "react"

import "./clothingCardStyling/clothingCardStyling.css"
import { ClothingContext } from "../context/ClothingContext"
import ClothingCard from "./ClothingCard"

export default function ClothingCards({cardType, category}){
    const {clothingData, getPersonIDs, cart} = useContext(ClothingContext)

    const personIDs = getPersonIDs()

    const cardElements = 
        clothingData.map(clothingObj => {
            const isAlreadyAdded = cart.includes(clothingObj.id)

            if(cardType === "confirm"){
                return personIDs.map(id => {
                    if(clothingObj.id === id ){
                        return (
                            <ClothingCard 
                                key={clothingObj.id}
                                id={clothingObj.id}
                                title={clothingObj.title}
                                description={clothingObj.description}
                                price={clothingObj.price}
                                category={clothingObj.category}
                                image={clothingObj.image}
                                isAlreadyAdded={isAlreadyAdded}
                                cardType={cardType}
                            />
                        )
                    }
                    return null
                })
            }

            else if(cardType === "dresser"){
                    if(clothingObj.category === category){
                        return (
                            <ClothingCard 
                                key={clothingObj.id}
                                id={clothingObj.id}
                                title={clothingObj.title}
                                description={clothingObj.description}
                                price={clothingObj.price}
                                category={clothingObj.category}
                                image={clothingObj.image}
                                isAlreadyAdded={isAlreadyAdded}
                                cardType={cardType}
                            />
                        )
                    }
            }

            else if(cardType === "cart"){
                return cart.map(cartID => {
                    if(clothingObj.id === cartID){
                        return (
                            <ClothingCard 
                                key={clothingObj.id}
                                id={clothingObj.id}
                                title={clothingObj.title}
                                description={clothingObj.description}
                                price={clothingObj.price}
                                category={clothingObj.category}
                                image={clothingObj.image}
                                isAlreadyAdded={isAlreadyAdded}
                                cardType={cardType}
                            />
                        )
                    }
                    return null
                }) 
            }
            
            else if(cardType === "checkout"){
                return cart.map(cartID => {
                    if(clothingObj.id === cartID){
                        return (
                            <ClothingCard 
                                key={clothingObj.id}
                                id={clothingObj.id}
                                title={clothingObj.title}
                                description={clothingObj.description}
                                price={clothingObj.price}
                                category={clothingObj.category}
                                image={clothingObj.image}
                                isAlreadyAdded={isAlreadyAdded}
                                cardType={cardType}
                            />
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