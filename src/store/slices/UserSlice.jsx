import {createSlice} from '@reduxjs/toolkit'
import { clearAllUsers } from '../actions';
// Redux Toolkit's createReducer and createSlice automatically use Immer internally to let you write simpler immutable update logic using "mutating" syntax. This helps simplify most reducer implementations.
const userSlice =createSlice({     
    name:"users",
    initialState:[],
    reducers:{
         addUser(state,action){
            state.push(action.payload)   //immer
         },
         removeUser(state,action){
            // state.pop(action.payload)
            state.splice(action.payload,1);
         },
        //  clearAllUsers(state,action){
        //    return []   //returing initialstate
        //  },
    },
    extraReducers(builder){
           builder.addCase(clearAllUsers, ()=>{
            return [];
           })
    }
}) 
export const {addUser ,removeUser}= userSlice.actions;
export default userSlice.reducer;


//we will use reducer isf action is handled by single reducer and 
// use extrareducer if action is handled by multiple reducer 