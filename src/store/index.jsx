import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./slices/UserSlice";

const  store=  configureStore({
    //this reducer is the root reducer
    reducer:{
        users: userSlice,
    }
})

export default store;