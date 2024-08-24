
function Food(){
    const food1 = "friedRice";
    const food2 = "Burger";
    
    
    return(
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food