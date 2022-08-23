import { Link } from "react-router-dom"

import Person from "../components/Person"
import "./dresserStyling.css"
import ClothingCard from "../components/ClothingCard"

export default function Dresser(){

    return(
        <div className="dresser-cont">
            <div className="selector-cont">
                <h2 className="selector-title">Upper body</h2>
                <ClothingCard cardType="dresser" category="upperbody"/>
                <h2 className="selector-title">Lower body</h2>
                <ClothingCard cardType="dresser" category="lowerbody"/>
                <h2 className="selector-title">Shoes</h2>
                <ClothingCard cardType="dresser" category="shoes"/>
            </div>
            <div className="person-cont">
                <div>
                    <Person />
                </div>
                <Link to="confirmation" className="confirm-button">Confirm selection</Link>
            </div>
        </div>
    )
}