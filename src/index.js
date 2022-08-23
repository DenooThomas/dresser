import {BrowserRouter as Router } from "react-router-dom"

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClothingContextProvider } from "./context/ClothingContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ClothingContextProvider>
      <App />
    </ClothingContextProvider>
  </Router>
)
