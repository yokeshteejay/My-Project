import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Help } from "./help";
import { Product } from "./product";
import { Home } from "./home";
import { Layout } from "./link";
function Router_data(){
    return(
        <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/help" element={<Help/>}/>
       </Routes>
       </BrowserRouter>
       </>
    )
}
export {Router_data}