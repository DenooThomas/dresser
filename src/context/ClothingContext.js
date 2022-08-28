import { createContext, useState } from "react";

import ClothingData from "./clothingData";

const ClothingContext = createContext()

function ClothingContextProvider(props){
    const [clothingData] = useState(ClothingData)

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

    
    function isSelected(){
        const personIDs = getPersonIDs()
        for(let i=0;i<personIDs.length;i++){
            if(personIDs[i] !== ''){
                return true
            }
        }
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
            return null
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

    function getTotalPrice(){
        let totalPrice = 0.0
        cart.map(id => {
            clothingData.map(clothingObj => {
                if(clothingObj.id === id){
                    return totalPrice = totalPrice + parseFloat(clothingObj.price)
                }
                return null
            })
            return null
        })
        return totalPrice
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
            clearCart,
            getTotalPrice,
            isSelected
            }}>
            {props.children}
        </ClothingContext.Provider>
    )
}

export {ClothingContext, ClothingContextProvider}