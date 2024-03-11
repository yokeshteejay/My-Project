import React,{useState} from "react";
import {list} from './components/data';
import Header from "./components/header";
import { BrowserRouter as Router,Routes } from "react-router-dom";
import Routes_data from "./components/routes";
import Product from "./components/product";


function Cart() {
    const{productItems} =list;
    const[cartItem,setcartItem]=useState([])

    const handleAddproduct=(Product)=>{
    const productExists=cartItem.find((item)=> 
    item.id === Product.id);
  
      if(productExists){
        setcartItem(cartItem.map((item)=> item.id === Product.id ?
        {...productExists,quantity:productExists.quantity + 1}:item)
       
      );
      
      }
      else{
        setcartItem([...cartItem,{...Product,quantity: 1}])

      }
    }
    const handleRemoveproduct=(product)=>{
      const productExists=cartItem.find((item)=> 
    item.id === product.id);

    console.log(productExists);

    if(productExists.quantity === 1){
      setcartItem(cartItem.filter((item)=>item.id !== product.id));
    }
    else{
      setcartItem(
        cartItem.map((item)=> item.id === product.id ? {...productExists,quantity:productExists.quantity - 1} : item)
      )
    }
    
    // console.log("hi");
    }
    const handleCartClearance=()=>{
      setcartItem([]);
    }
  return (
    <div>
    <Router>
    <Header cartItem={cartItem}/>
    <Routes_data
   productItems={productItems}
     cartItem={cartItem}
     handleAddproduct={handleAddproduct}
     handleRemoveproduct={handleRemoveproduct}
     handleCartClearance={handleCartClearance}/>
    </Router>
    </div>
  )
}

export default Cart