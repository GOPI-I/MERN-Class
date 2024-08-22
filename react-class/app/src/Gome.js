import {useState} from 'react';
function Gome(){
    let firstName ="akash pandiya";
    const [email , setEmail] = useState("");
    const [address , setAddress] = useState("");
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
    // function handleEmail(event){
    //     setEmail(event.target.value);
    // }

    return(
        <>
        <h1>Heloo cena</h1>
        <h1>Name : {firstName} </h1>
        <h1>Email : {email}</h1>
        <h1>Address  :{address}</h1>
        <h1>Phone Number : {number}</h1>
        <input type='text'   onChange={(e) => setEmail(e.target.value)}/><br></br>
        <input type='number' placeholder='enter mobile number' onChange={(e) => setNumber(e.target.value)}/><br></br>
        <button onClick={() => validate()}>Click Me</button>
        </>
    );

}
export default Gome;