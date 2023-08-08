import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import Header from './component/Header'
import Home from './component/Home';

import "./styles/App.scss"

function App() {
  return (
  <Router>
    <Header/>
    <Home/>
    
  </Router>
  )
}

export default App