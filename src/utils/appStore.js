import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore(
    //This is store
    //Add slices
    {
        reducer: {
            cart : cartReducer
        }    
    }
);

export default appStore;