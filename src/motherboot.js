import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boostrap from "./boostrap";
import Addstud_1 from "./addstud";

function Motherboot() {
    const [count,setcount] = useState(0) 

    const count_1 = (counting)=>{ setcount(counting)}


    return(
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Boostrap normal={count}/>}/>
        <Route path='/Addstudent' element={<Addstud_1 form_1={count_1}/>}/>
     </Routes>
     </BrowserRouter>
    )
}
export default Motherboot