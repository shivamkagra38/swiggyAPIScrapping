import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({

    //This takes configuration of slice

    name : "cart",
    initialState : {
        items: []
    },
    reducers: {

        addItems : (state, action) => {

            // const newArr = [...state];
            // newArr.push(action.payload);
            // return newArr; 

            //In vanilla redux mutating existing state is not allowed!
            //in RTK we either can mutate the existing state or return new state
           state.items.push(action.payload);

        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clear : (state,action) => {
           //state.items = [];
           return {items: []};
        }

    }
});

console.log(cartSlice);

export const addItems = cartSlice.actions.addItems;
export const removeItem = cartSlice.actions.removeItem;
export const clear = cartSlice.actions.clear;

export default cartSlice.reducer;