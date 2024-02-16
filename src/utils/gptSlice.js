import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGpt:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGpt:(state,action)=>{
            state.showGpt=!state.showGpt;
        },
        addGptMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieResults=movieResults;
            state.movieNames=movieNames;
        }
    }
})

export const {toggleGpt,addGptMovies}=gptSlice.actions;

export default gptSlice.reducer;