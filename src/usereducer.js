import { useReducer } from "react"
function fun1(redu,reducer) {
    switch (reducer.type) {
        case "increment":
            return{count:redu.count+1}
            case "decrement":
            return{count:redu.count-1}
            case "reset":
            return{count:0}
            
    }
}

function Reduce() {
    const [redu,reducer] = useReducer(fun1,{count:0})
    return(
        <>
       <button onClick={()=>reducer({type:"increment"})}>+</button>
       <h1>{redu.count}</h1>
       <button onClick={()=>reducer({type:"decrement"})}>-</button>
       <button onClick={()=>reducer({type:"reset"})}>reset</button>
       </>
    )
    
}
export {Reduce}