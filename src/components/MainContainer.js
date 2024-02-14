import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies1=useSelector((store)=>{return store.movies?.nowPlayingMovies});
    if(movies1===null) return;//if no movies in a store then return from here.//known as early return

    const mainMovie=movies1[0];//if movies are there in a store then execute from here.
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
