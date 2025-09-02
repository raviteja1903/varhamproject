 import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './Pages/Hero'
import AboutUs from './Pages/AboutUs'
import MissionVisionValues from './Pages/MissionVisionValues'
 
 const App = () => {
   return (
     <div>
       <Navbar/>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/mission" element={<MissionVisionValues />} />
        </Routes>
     </div>
   )
 }
 
 export default App
 