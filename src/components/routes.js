import React from "react"
import { Route,Routes } from "react-router-dom"
import Signup from "./signup"
import Product from "./product"
import Cart_1 from "./cart_1"

function Routes_data({productItems,cartItem,handleAddproduct,handleRemoveproduct,handleCartClearance}) {
  return (
    <>
    <Routes>
        <Route path="/" exact element={<Product
         productItems={productItems}
          handleAddproduct={handleAddproduct}/>}></Route>

        <Route path="/signup" exact element={<Signup/>}></Route>

        <Route path="/cart" exact element={<Cart_1
        cartItem={cartItem} 
        handleAddproduct={handleAddproduct} 
        handleRemoveproduct={handleRemoveproduct}
        handleCartClearance={handleCartClearance}/>}></Route>

    </Routes>
     
    </>
  )
}

export default Routes_data