import React , {useState} from "react"
function Car(){
    const[car , setCar] = useState({year : 2022 , make : "Ford" , model : "mustang"})

    function handleYear(event){
        setCar(c => ({...c, year : event.target.value})); //... is spread operator withour tah t the prevoius value is nto shown

    }
    function handleMake(event){
        setCar(c => ({...c ,make : event.target.value }));
        
    }
    function handleModel(event){
        setCar(c => ({...c , model : event.target.value}));
        
    }
    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number"   value={car.year} onChange={handleYear}/><br/>
            <input type="text" value={car.make} onChange={handleMake}/><br/>
            <input type="text"  value={car.model} onChange={handleModel } /><br/>

        </div>
    )

}
export default Car