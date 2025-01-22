import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import './index.css'
import Background from './components/Background'
import About from './components/About'
import Apps from './components/Apps'
import Slider from './components/Slider'
import Rates from './components/Rates'
import Clients from './components/Clients'
import Slide2 from './components/Slide2'
import Features from './components/Features'
import Footer from './components/Footer'
import Zoadic from './components/Zoadic'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Product from './components/Product'
import Dreams from './components/Dreams'
import Advance from './components/Advance'
import Ramal from './components/Ramal'
import Soul from './components/Soul'
import DailyHoroscopes from './components/DailyHoroscopes'
import Angel from './components/Angel'
import Secret from './components/Secret'
import Numerology from './components/Numerology'
import PicsMagic from './components/PicsMagic'


const App = () => {
  return (
    <Router>
           <div>
          <Nav/>
            <Background/>
            <Routes>
            <Route path="" element=''/>
            <Route path="/Product" element={<Product/>}/>  
            <Route path="/Dreams" element={<Dreams/>}/>  
            <Route path="/Advance" element={<Advance/>}/>  
            <Route path="/Ramal" element={<Ramal/>}/>  
            <Route path="/Soul" element={<Soul/>}/>  
            <Route path="/Numerology" element={<Numerology/>}/>  
            <Route path="/Pics" element={<PicsMagic/>}/>  
            <Route path="/Horoscopes" element={<DailyHoroscopes/>}/>  
            <Route path="/Angel" element={<Angel/>}/>  
            <Route path="/Secret" element={<Secret/>}/>  
            </Routes>
            <About/>
            <Zoadic/>
            <Apps/>
            <Slider/>
            <Rates/>
            <Clients/>
            <Slide2/>
            <Features/>
            <Contact/>
             <Footer/>
          </div>
          </Router>
  )
}

export default App
