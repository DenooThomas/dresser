import React from "react";
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className="home-cont">
            <div className="home-title-cont">
                <h1 className="home-title">Dresser</h1>
                <p>Beta</p>
            </div>
            <Link to="/dresser" className="confirm-button">Start shopping</Link>
        </div>
    )
}
