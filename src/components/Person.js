import { Link } from "react-router-dom"
import React, { useContext } from "react";

import { ClothingContext } from "../context/ClothingContext";
import "./personStyling/personStyling.css"

export default function Person(){
    
    const {person, getPersonIDs} = useContext(ClothingContext)
    const personIDs = getPersonIDs()

    function isSelected(){
        for(let i=0;i<personIDs.length;i++){
            if(personIDs[i] !== ''){
                return true
            }
        }
    } 
    return (
        <React.Fragment>
            <div className="person-option-cont upperBody">
                {person.upperbody.img.length > 0 && <img src={person.upperbody.img} alt="person clothing" className="person-img" />}
            </div>
            <div className="person-option-cont lowerBody">
                {person.lowerbody.img.length > 0 && <img src={person.lowerbody.img} alt="person clothing" className="person-img" />}
            </div>
            <div className="person-option-cont shoes">
                {person.shoes.img.length > 0 && <img src={person.shoes.img} alt="person clothing" className="person-img" />}
            </div>
            {isSelected() && <Link to="confirmation" className="confirm-button">Confirm selection</Link>}
        </React.Fragment>
)
}