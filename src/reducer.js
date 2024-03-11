import { useReducer } from "react"
function fun(state,action){
    switch(action.type) {
            case"increment":
            return{count:state.count +1};
            case "decrement":
            return{count:state.count -1};
            case "reset":
            return{count:0};
            
        }
}

function Reducer() {
    const [state,dispatch]=useReducer(fun,{count:0})
    return(
        <>
        <div>helo</div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </>
    )
    
}
export {Reducer}