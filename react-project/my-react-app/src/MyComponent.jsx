import React, {useState} from "react"

function MyComponent(){

    //use state program :
    // const [name,setName] = useState("Guest");
    // const [age , setAge] = useState(0);
    // const [isEmployeed, setIsEmployeed] = useState(false);
    // const updateName = () => {
    //     setName("spongeBob");
    
    // }
    // const incrementAge = () =>{
    //     setAge(age +1);
    // }
    // const toggleEmployeedStatus =() =>{
    //     setIsEmployeed(!isEmployeed);
    // }
    // return(
    //     <div>
    //         <p>Name : {name} </p>
    //         <button onClick={updateName}>SetName</button>

    //         <p>Age : {age}</p>
    //         <button onClick={incrementAge}>Increment</button>

    //         <p>isEmployeed : {isEmployeed ? "yes" : "No"}</p>
    //         <button onClick={toggleEmployeedStatus}>ToggleStatus</button>
            
    //     </div>
    // );


    //onChange

    const [name , setName] = useState("Guest23");
    const [quantity , setQuantity] = useState();
    const [comment , setCommnet] =useState("");
    const [payments , setPayments] = useState("");
    const [gender , setGender] = useState("");
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value);
    }
    function handleCommnet(event){
        setCommnet(event.target.value);
    }
    function handlePayment(event){
        setPayments(event.target.value);
    }
    function handleGender(event){
        setGender(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name : {name}</p>
            <input value={quantity} onChange={handleQuantity} type="number"/>
            <p>Quantity ; {quantity}</p>
            <textarea value={comment} placeholder="Enter any suggestions!!" onChange={handleCommnet} />
            <p>Comment : {comment}</p>
            <select value={payments} onChange={handlePayment}>
                <option value=" "> Select an option</option>
                <option value="UPI">UPI</option>
                <option value="NetBanking">NetBanking</option>
                <option value="cash">Cash On Delivery</option>

            </select>
            <p>Payment Mode : {payments}</p>
            <label>
                <input type="radio" value="male"
                checked = {gender === "male"}
                onChange={handleGender} />
                MALE
            </label>
            <label>
                <input type="radio" value="female"
                checked = {gender === "female"}
                onChange={handleGender} />
                FEMALE
            </label>
            <p>Gender : {gender}</p>
        </div>

    );

}
export default MyComponent