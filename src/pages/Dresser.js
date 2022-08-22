import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import "./dresserStyling.css"
import { Context } from "../context/Context"

export default function Dresser(){

    const {person, handleClick, clothingData} = useContext(Context)

    const upperBodyElements = []
    const lowerBodyElements = []
    const shoesElements = []

    clothingData.forEach(clothingObj => {
        const jsxTemplate = 
            <div key={clothingObj.id} className="selector-option">
                <div className="selector-option-text-cont">
                    <p>{clothingObj.name}</p>
                    <button onClick={() => handleClick(clothingObj.id, clothingObj.category, clothingObj.img)} className="selector-option-button">Try on</button>
                </div>
                <img src={clothingObj.img} alt="clothing option" className="selector-img" />
            </div>
        
        if(clothingObj.category === "upperbody"){
            upperBodyElements.push(
                jsxTemplate
            )
        }
        else if(clothingObj.category === "lowerbody"){
            lowerBodyElements.push(
                jsxTemplate
            )
        }
        else if(clothingObj.category === "shoes"){
            shoesElements.push(
                jsxTemplate
            )
        }
    })

    return(
        <div className="dresser-cont">
            <div className="selector-cont">
                <h2 className="selector-title">Upper body</h2>
                {upperBodyElements}
                <h2 className="selector-title">Lower body</h2>
                {lowerBodyElements}
                <h2 className="selector-title">Shoes</h2>
                {shoesElements}
            </div>
            <div className="person-cont">
                <div>
                    <div className="person-option-cont upperBody">
                        {person.upperbody.img.length > 0 && <img src={person.upperbody.img} alt="person clothing" className="person-img" />}
                    </div>
                    <div className="person-option-cont lowerBody">
                        {person.lowerbody.img.length > 0 && <img src={person.lowerbody.img} alt="person clothing" className="person-img" />}
                    </div>
                    <div className="person-option-cont shoes">
                        {person.shoes.img.length > 0 && <img src={person.shoes.img} alt="person clothing" className="person-img" />}
                    </div>
                </div>
                <Link to="/confirmation" className="selector-option-button person-confirm-button">Confirm selection</Link>
            </div>
        </div>
    )
}