
function List(){
    const fruits = [{name:"apple",calories:95},
                    {name:"banana",calories:45},
                    {name:"pineapple",calories:47},
                    {name:"fig",calories:43},
                    {name:"strawberry",calories:67}];
    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical  sort
    // fruits.sort((a, b) => b.name,localeCompare(a.name)) //reverse Alphabetical
    //sort based on caloires
    // fruits.sort((a, b) => a.calories - b.calories) //numeric
    // fruits.sort((a, b) => b.calories - a.calories)

    //  const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp;
    //                                         <b>{fruit.calories}</b></li>); 

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 50 );
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.name}>{lowCalFruit.name}: &nbsp;
                                            <b>{lowCalFruit.calories}</b></li>); 


   
    
        return(<ul className="ul-list">{listItems}</ul>)

}
export default List