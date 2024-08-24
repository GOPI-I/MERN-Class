
function Button1(){
    let count = 0;
    const handleClick = (e) => e.target.textContent ="OOUCH 😲";
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/'s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`)

    //     }

    // };
    // // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // return (
    //     <button onClick={() => handleClick("akash")}>Click me 😜</button>
    // );
    return(
        <button  id="btn" onDoubleClick={(e) =>handleClick(e) }>Click me 😜</button>


    );
}
export default Button1