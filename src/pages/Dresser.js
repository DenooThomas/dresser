import { useContext } from "react"
import { Link } from "react-router-dom"

import "./dresserStyling/dresserStyling.css"
import ClothingCardGen from "../components/ClothingCardGen"
import { ClothingContext } from "../context/ClothingContext"


export default function Dresser(){ 
    const {isSelected, person} = useContext(ClothingContext)

    

    return(
        <div className="dresser-cont">
            <div className="selector-cont">
                <h2 className="selector-title">Upper body</h2>
                <ClothingCardGen cardType="dresser" category="upperbody"/>
                <h2 className="selector-title">Lower body</h2>
                <ClothingCardGen cardType="dresser" category="lowerbody"/>
                <h2 className="selector-title">Shoes</h2>
                <ClothingCardGen cardType="dresser" category="shoes"/>
            </div>
            <div className="person-cont">
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
            </div>
        </div>
    )
}