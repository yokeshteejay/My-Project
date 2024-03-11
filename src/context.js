import React, { createContext, useContext, useState } from "react";
const declare_1 = createContext()
function Parent() {
    const [data,setdata] = useState([{name:"yokesh"},{name:"teejay"}])
    return(
        <>
        <declare_1.Provider value={data}>
        <Child1/>
        <Child2/>
        </declare_1.Provider>
        </>
    )
}

function Child1() {
    const usedata = useContext(declare_1)
    return(
<>
{/* <h1>{usedata}</h1> */}
{usedata.map((e)=>(<p key={e.id}>{e.name}</p>))}
<p>helo</p>
</>
    )
}
function Child2() {
    const usedata_1 = useContext(declare_1)
    return(
<>

<p>helo</p>
{/* <h1>{usedata_1}</h1> */}
</>
    )
}
export {Parent}
