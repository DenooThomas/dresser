import { createContext, useState } from "react";

import ClothingData from "./clothingData";

const Context = createContext()

function ContextProvider(props){
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

    return (
        <Context.Provider value={{person, handleClick, clothingData}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}