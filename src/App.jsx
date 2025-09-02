 import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './Pages/Hero'
import AboutUs from './Pages/AboutUs'
import MissionVisionValues from './Pages/MissionVisionValues'
import OurCapabilities from './Pages/OurCapabilities'
import MissionForm from './Pages/MissionForm'
import Footer from './Components/Footer'
 
 const App = () => {
   return (
     <div>
       <Navbar/>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/mission" element={<MissionVisionValues />} />
            <Route path="/capabilities" element={<OurCapabilities/>} />
             <Route path="/careers" element={<MissionForm/>} />
        </Routes>
        <Footer/>
     </div>
   )
 }
 
 export default App
 