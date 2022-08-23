import { createContext, useState, useEffect } from "react";

import ClothingData from "./clothingData";

const ClothingContext = createContext()

function ClothingContextProvider(props){
    const [clothingData, setClothingData] = useState(ClothingData)

    const personObj = {
        upperbody: {
            id: "",
            img: ""
        },
        lowerbody: {
            id: "",
            img: ""
        },
        shoes: {
            id: "",
            img: ""
        }
    }

    function getPersonIDs(){
        const IDs = []
        IDs.push(person.upperbody.id)
        IDs.push(person.lowerbody.id)
        IDs.push(person.shoes.id)
        return IDs
    }

    const [person, setPerson] = useState(personObj)

    function handleClick(id, category, img){
        setPerson(prevPerson => {
            return {
                ...prevPerson,
                [category]: {
                    ...prevPerson[category],
                    id: id,
                    img: img
                }
            }
        })
    }

    function removeItem(category){
        setPerson(prevPerson => {
            return {
                ...prevPerson,
                [category]: {
                    ...prevPerson[category],
                    id: "",
                    img: ""
                }
            }
        })
    }
    

    const [cart, setCart] = useState([])

    function addToCart(idArray){
        idArray.map(id => {
            const isAlreadyAdded = cart.includes(id)
            if(id.length > 0 && !isAlreadyAdded) {
                return setCart(prevCart => {
                    return [...prevCart, id]
                })
            }
        })
        setPerson(personObj)
    }

    function removeFromCart(id){
        setCart(prevCart => {
            return prevCart.filter(cartID => cartID !== id)
        })
    }

    function clearCart(){
        setCart([])
    }

    return (
        <ClothingContext.Provider value={{
            person, 
            handleClick, 
            clothingData,
            getPersonIDs,
            removeItem,
            cart,
            addToCart,
            removeFromCart,
            clearCart
            }}>
            {props.children}
        </ClothingContext.Provider>
    )
}

export {ClothingContext, ClothingContextProvider}