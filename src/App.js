import { Routes, Route } from "react-router-dom"
import React from "react"

import Header from "./components/Header"
import Home from "./pages/Home"
import Dresser from "./pages/Dresser"
import Confirmation from "./pages/Confirmation"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

export default function App() {

  return (
    <React.Fragment>
      <Header />
      <div className="main-cont">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/dresser" element={<Dresser />}/>
          <Route path="/dresser/confirmation" element={<Confirmation />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
    </div>
    </React.Fragment>
    
  )
}
