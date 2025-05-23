import {useState} from "react";
import useCounter from "./useCounter.jsx";


function App(){

    const {count, increment, decrement, reset} =  useCounter();



    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default App