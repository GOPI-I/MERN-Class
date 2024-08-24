import React , {useState} from "react";
function ArrayFood(){
    const [foods , setFoods] = useState(["Apple" , "Banana" ,"Carrot"]);

    


    function handleFood(){
        const newFood = document.getElementById("input-food").value;
        document.getElementById("input-food").value = "";
        setFoods(f => [...f , newFood])
    }
    function handleRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of foods:</h2>
            <ul>
                {foods.map((food , index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input id="input-food" type="text" placeholder="Enter new food"/>
            <button onClick={handleFood}>Add</button>
        </div>
    );
}
export default ArrayFood