import React, { useState } from "react";
import img from "./logo.svg";
function Parent() {
    return(
        <>
      <Child1/>
      <Child2/>
      </>
    )
}
function Child1() {
    return(
        <>
        <img src={img}></img>
        <div>hi</div>
        <div>helo</div>

        </>
    )
}
function Child2() {
    const [data,setdata]=useState(0)
    let increment = ()=>{setdata(data+1)}
    let decrement = ()=>{setdata(data-1)}
    
    return(
        <>
        <button onClick={increment}>+</button>
        <h1>{data}</h1>
        <button onClick={decrement}>-</button>
        <div>bye</div>
        <div>good bye</div>
        </>
    )
}
export default Parent;