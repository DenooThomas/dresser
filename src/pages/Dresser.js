import Person from "../components/Person"
import "./dresserStyling/dresserStyling.css"
import ClothingCardGen from "../components/ClothingCardGen"


export default function Dresser(){ 

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
            </div>
        </div>
    )
}