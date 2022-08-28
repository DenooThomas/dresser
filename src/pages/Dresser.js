import { useContext } from "react"
import { Link } from "react-router-dom"

import Person from "../components/Person"
import "./dresserStyling/dresserStyling.css"
import ClothingCardGen from "../components/ClothingCardGen"
import { ClothingContext } from "../context/ClothingContext"


export default function Dresser(){ 
    const {isSelected} = useContext(ClothingContext)

    

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
                <Person />
                {isSelected() && <Link to="confirmation" className="confirm-button">Confirm selection</Link>}
            </div>
        </div>
    )
}