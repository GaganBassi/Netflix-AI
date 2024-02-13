import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice(
{
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload //here action.payload is an argument which comes function call happen.
            //whenver user login, will call this function and change the state to action.payload
        },
        removeUser:(state,action)=>{
            //whenver user logout, will call this function and change the state to null
            return null;
            
        }
    }
}
)

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;