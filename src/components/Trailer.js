import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useVideoTrailer from '../hooks/useVideoTrailer';
import VideoBackground from './VideoBackground';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';

const Trailer = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const [videoTrailer,setVideoTrailer]=useState();
    //const filteredTrailerRedux=useSelector((store)=>{return store.movies.trailerVideo})
    const location=useLocation();//Fetching data with useNavigate();
    console.log("Location",location.state.movieId); 
    const movieTrailer=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${location.state.movieId}/videos?language=en-US`, API_OPTIONS);
        const json=await data.json();
        //console.log(json.results);
        const filteredTrailer=json.results.filter((movieType)=>{
            if(movieType.type==="Trailer"){
                return movieType;
            }
        })
        console.log(filteredTrailer);
        dispatch(addTrailerVideo(filteredTrailer));
        setVideoTrailer(filteredTrailer[0]?.key);
        //console.log(filteredTrailer?.key);
        

    }
    useEffect(()=>{
        movieTrailer();
    },[])

    const back=()=>{
        navigate(-1);
       // navigate(-1);
    }
    
    
  return (
    <div className='absolute -mx-6 px-8 py-2 w-screen bg-gradient-to-b from-black  z-10 flex justify-between bg-transparent
    flex-col md:flex-row sm:flex-row'>?
     <button className=' absolute m-5 py-2 h-12 px-4 bg-purple-800 text-white rounded-lg  hover:cursor-pointer '  onClick={back}>Home</button>
        
      <iframe className="w-screen h-screen aspect-video" src={`https://www.youtube.com/embed/${videoTrailer}` + "?&autoplay=1&mute=1"} 
    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    {/* 
    ?&autoplay=1&mute=1 to autoplay the video on UI
  */}
 
  
    </div>
  )
}

export default Trailer
