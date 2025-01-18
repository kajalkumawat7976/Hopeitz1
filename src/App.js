import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import './index.css'
import Background from './components/Background'
import Home from './components/Home'
import About from './components/About'
import Apps from './components/Apps'
import Slider from './components/Slider'
import Rates from './components/Rates'
import Clients from './components/Clients'
import Slide2 from './components/Slide2'
import Features from './components/Features'

const App = () => {
  return (
    <Router>
           <div>
            <Background/>
            
            <Routes>
            <Route path=" " element=''/> 
            </Routes>
            <Home/>
            <About/>
            <Apps/>
            <Slider/>
            <Rates/>
            <Clients/>
            <Slide2/>
            <Features/>
          </div>
          </Router>
  )
}

export default App
