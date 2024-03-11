import React, { useEffect, useRef } from 'react'

function Ref_data() {
    const ref_data=useRef(0)
    const color_change=["red","green","blue","violet"]

    // useEffect(()=>{
    //     console.log(color_change);
    //     console.log(ref_data.current);
    // }).
    console.log(color_change);

    const Style_data = ()=>{
        let random = Math.floor(Math.random() * color_change.length)
        console.log(random);
        ref_data.current.style.color=color_change[random];
    }
  return (
    <>
   <button onClick={()=>{Style_data()}}>click me</button>
   <p ref={ref_data}>helo</p>
   </>
  )
}

export default Ref_data