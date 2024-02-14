import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>{return store?.movies});
  const popular=useSelector((store)=>{return(store?.movies?.popularMovies)});
  const upComing=useSelector((store)=>{return(store?.movies?.upComingMovies)});
  const trending=useSelector((store)=>{return(store?.movies?.trendingMovies)});
  return (
    <div className=' bg-black'>
      {
        /*
        MovieList - Popular
          MovieCard * N
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror
        */
      }
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Trending"} movies={trending}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={popular}/>
      <MovieList title={"Upcoming"} movies={upComing}/>
      
      </div>
      
    </div>
  )
}

export default SecondaryContainer
