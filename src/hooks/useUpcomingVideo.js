import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingVideo=()=>{
    const dispatch=useDispatch();
    const upComingMovies=useSelector((store)=>store.movies.upComingMovies);
    const getUpcomingVideos=async()=>{

       const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
       const json=await data.json();
       console.log('Upcoming',json.results);
        dispatch(addUpcomingMovies(json.results));
}
useEffect(()=>{
    !upComingMovies && getUpcomingVideos();
},[])
}

export default useUpcomingVideo ;