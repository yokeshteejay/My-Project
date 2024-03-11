import React from 'react'
import Frontpage from './frontpage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Contact from './contact'

function Router_response() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Frontpage/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router_response