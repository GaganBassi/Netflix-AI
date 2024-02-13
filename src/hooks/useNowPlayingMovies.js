import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{

    const dispatch=useDispatch();

//Fetching of an API from TMDB
  const getNowPlayingMovies= async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    //API options coming from constant file and it has the info of API key and token
    const json=await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[])

}

export default useNowPlayingMovies;