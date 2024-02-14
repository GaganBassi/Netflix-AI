import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies1=useSelector((store)=>{return store.movies?.nowPlayingMovies});
   
    //console.log("gen",genuineMovie);
    
    if(movies1===null) return;//if no movies in a store then return from here.//known as early return
    const temp=[movies1[0],movies1[1],movies1[6],movies1[4],movies1[7]];
    const random = Math.floor(Math.random() * temp.length);//to select random value
    console.log(random);

    const mainMovie=temp[random];//if movies are there in a store then execute from here.
    console.log(mainMovie);

    const {original_title,overview,id}=mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
