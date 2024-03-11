import React, { useState } from "react";
import img from"./down1.png";
function Segment() {
    return(
        <>
        <img src={img} width={300}></img>
      <div>FACEBOOK</div>
      <Use/>
    </>
    )
}
function Use() {
    const [data,setdata] = useState(0)
    let increment = ()=>{setdata(data +1)}
    let decrement=()=>{setdata(data -1)}
    return(
     <>
     <button onClick={increment}>+</button>
     <div>{data}</div>
     <button onClick={decrement}>-</button>
     </>
    )
    
}
export default Segment;