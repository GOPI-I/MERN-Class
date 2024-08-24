import React , {useState} from "react"
function Counter(){
    const [count , setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }
    const reset = () =>{
        setCount(0);
    }
    return(
        <div id="counter">
            <p id="p-count">{count}</p>
            <button id="btn-increment" onClick={increment}>Increment</button>
            <button id="btn-increment" onClick={reset}>Reset</button>
            <button id="btn-decrement" onClick={decrement}>Decrement</button>
        </div>
    );

}
export default Counter