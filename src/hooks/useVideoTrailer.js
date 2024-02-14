import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useVideoTrailer= (movieId)=>{

    const dispatch=useDispatch();
    //const [trailerKey,setTrailerKey]=useState();
    const getMovieVideos=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json=await data.json();
        //console.log('Trailer',json);

    const filteredTrailer=json.results.filter((i)=>{
        if(i.type==='Trailer'){
            return i;
        }
    })
    //if filtered trailer return 1 or more than 1 then it will be good, otherwise use any clip if filtered trailer is empty.
    const trailer=filteredTrailer.length ? filteredTrailer[0]:json.results[0];
    //This trailer has the youtube video key (trailer.key)

    console.log('Trailer',trailer);
    //setTrailerKey(trailer.key)
    dispatch(addTrailerVideo(trailer));

    }
   useEffect(()=>{
    getMovieVideos()
   },[])
   //return trailerKey;

}

export default useVideoTrailer;