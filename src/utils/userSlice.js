import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice(
{
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload //here action.payload is an argument which comes function call happen.
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
}
)

export const {addUser,removeUser}=userSlice.actions;

export default userSlice.reducer;