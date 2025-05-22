import {useState} from "react";


function useCounter(initialValue = 0){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => setCount(initialValue);

    return {count, increment, decrement, reset};

    // return (
    //     <div>
    //         <h2>Count: {count}</h2>
    //         <button onClick={increment}>Increment</button>
    //         <button onClick={decrement}>Decrement</button>
    //     </div>
    // )

}

export default useCounter;