import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
import { Link, useNavigate } from 'react-router-dom';

const MovieCard = ({movieId,posterPath}) => {
  
  const navigate=useNavigate();
    //Image half Url coming from constant.js
    if(!posterPath) return null;

    //Sending data with navigate() function
    const trailerPage=()=>{
      console.log("Key",movieId);
      navigate('/trailer',{state:{movieId:movieId}});
    }
  return (
    <div className='w-36 md:w-48 pr-4' >
      <button onClick={trailerPage}><img alt="Movie-Poster"
      src={`${IMG_CDN_URL}${posterPath}`}/></button>
    </div>
  )
}

export default MovieCard
