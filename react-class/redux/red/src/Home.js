import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';

const Home = () => {
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const add = () => {
        dispatch({ type: 'add' });     };

    const sub = () => {
        dispatch({ type: 'sub' }); 
    };
    const saveDetails =() =>{
        dispatch({
            type:'saveDetails',
            data:{"name":"Gopi","email":"igopi170@"}
        })
    }

    return (
        <div>
            <Header/>
            <h1>{counterVal}</h1><br />
            <input type="button" value="Add" onClick={add} /> 
            <input type="button" value="Sub" onClick={sub} /> <br></br>
            
           <input type='submit' value="savemydetails" onClick={saveDetails}/>
        </div>
    );
};

export default Home;