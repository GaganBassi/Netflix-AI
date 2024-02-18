import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {

    const {title, movies}=props;
    //console.log("Movies",movies);
  return (
    <div className='px-6 '>
      <h1 className=' text-lg sm:text-xl md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            
        
        <div className='flex'>
          {/*
            movies && <MovieCard posterPath={movies[0].poster_path}/>
            Important Concept if movies there then only run this.
  */}
           {
           movies && movies?.map((movie)=>{

            return(<MovieCard key={movie?.id} movieId={movie?.id} posterPath={movie?.poster_path}/>)
           }) 
           } 
        </div>
      </div>
    </div>
  )
}

export default MovieList
