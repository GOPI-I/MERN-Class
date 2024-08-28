import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
const counterVal = useSelector((state) => state.counter);
const dispathch = useDispatch();
  const add =() =>{
    dispathch({
      type : "add"
    });

  }
  const sub =() => {
    dispathch({
      type : "sub"
    });

  }
  return (
    <div>Home<br/>
      <input type='button' value="Add" onClick={add}/>
      <input type='button' value="Sub" onClick={sub}/>
      <h1>{counterVal}</h1>




    </div>
    
  )
}

export default Home