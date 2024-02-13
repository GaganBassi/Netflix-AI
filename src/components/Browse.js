import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header';
import { auth } from '../utils/firebase';

import { API_OPTIONS } from '../utils/constant';

const Browse = () => {

//Fetching of an API from TMDB
  const getNowPlayingMovies= async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    //API options coming from constant file and it has the info of API key and token
    const json=await data.json();
    console.log(json.results);
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[])
  const selector=useSelector((store)=>{return store.user})

  //const selector=useSelector((store)=>{return store.user});

  //console.log(selector.email);
  console.log('Hello');
  console.log(selector?.email);
  console.log(auth?.currentUser?.displayName);
 
  //console.log(auth.currentUser.email);
  return (
    <div>
      <Header/>
        Browse
    </div>
  )
}

export default Browse
