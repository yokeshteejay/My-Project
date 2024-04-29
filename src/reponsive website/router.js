import React from 'react'
import Frontpage from './frontpage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Contact from './contact'
import Specific from './specification'
import Color from './color'
import Product from './product'
import Aboutus from './aboutus'

function Router_response() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Frontpage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path='/specific' element={<Specific/>}/>
            <Route path="/color" element={<Color/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/specification" element={<Specific/>}/>
            <Route path="/about" element={<Aboutus/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router_response