import { useState } from "react";
function Login(){
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState();
    const validate = () => {
        if (email == "" ){
            alert("please enter email")
        }
        else if(number == ""){
            alert("please enter mobile number")
        }
        else{
            alert("login succesffullly")
        }
    }
    console.log(email);
    console.log(number);
    return(
        <div>
            <h1>Login Form</h1>
            <input type='text'   onChange={(e) => setEmail(e.target.value)}/><br></br>
        <input type='number' placeholder='enter mobile number' onChange={(e) => setNumber(e.target.value)}/><br></br>
        <button onClick={() => validate()}>Click Me</button>
        </div>

    );
}
export default Login;