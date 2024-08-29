import { configureStore } from '@reduxjs/toolkit';

const CounterLogic = (state = 1, action) => {
    switch (action.type) {
        case "add":
            return state * 2;
        case "sub":
            return state - 1;
        default:
            return state; 
    }
};
const storeMyDetailsReducer=(state={},action)=>{
    switch(action.type){
        case "saveDetails":
            console.log(state.data);
           return action.data;
    }
    return state;

}

export const myStore = configureStore({
    reducer: {
        "counter": CounterLogic,
        
        "myDetails":storeMyDetailsReducer,
    }
});