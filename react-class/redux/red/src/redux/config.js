import {configureStore} from '@reduxjs/toolkit'
const counterLogic = (state = 0 , action) => {
    switch(action.type){
        case "add":
            return state + 1;
        break;
        case "sub":
            return state - 1;
        break;
        default:
            return state;
    }

}
export const myStore = configureStore({
    reducer:{
        "counter":counterLogic,
        }
})