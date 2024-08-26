import React , {useState , useEffect} from "react";

function Component(){
    const[count , setCount] = useState(0);
    const[color , setColor] = useState("green");

    useEffect(() => {
        document.title = ` Count is : ${count} ${color}`;

    },[count , color]



    );
    function addCount(){
        setCount(c => c + 1);
    }
    function subCount(){
        setCount(c => c -1);
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }
    return(
        <div>
            <p style={{color : color}}>count : {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Minus</button>
            <button onClick={changeColor}>ChangeColor</button>

        </div>

    );
}
export default Component