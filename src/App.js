import { Routes, Route } from "react-router-dom"
import React from "react"

import Header from "./components/Header"
import Home from "./pages/Home"
import Dresser from "./pages/Dresser"

export default function App() {

  return (
    <React.Fragment>
      <Header />
      <div className="main-cont">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/dresser" element={<Dresser />}/>
        </Routes>
    </div>
    </React.Fragment>
    
  )
}
