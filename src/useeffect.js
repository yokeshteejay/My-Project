import React, { useEffect, useState } from "react";
import Axios from "axios"

function Effect() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => setdata(res))

        // Axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(res => setdata(res.data))

    })
    return(
        <>
        <p>{data.map((v,i)=>(<p key={i}>{v.name}</p>))}</p>
        </>
    )
}
export {Effect}