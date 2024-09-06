import React, { useReducer } from 'react'
import "./styles.css"
const reducer =(state , action)=>{
    switch(action.type){
        case "increment":
            return {
                count: state.count+1,
            }
        case "decrement":
            return {
                count: state.count-1,
            }
    }
    throw new Error("type mismatch" + action.type)
}

function Counter() {
    const [state , dispatch] = useReducer(reducer , {count: 0})
    return (
        <div className='counter-container'>
            <button onClick={(e)=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={(e)=>dispatch({type:"decrement"})}>Decrement</button>
            <h1>{state.count}</h1>
        </div>
    )
}

export default Counter
