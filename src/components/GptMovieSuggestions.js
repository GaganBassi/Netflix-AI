import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {
  const gptSuggestions=useSelector((store)=>{return store.gpt});
  const {movieResults,movieNames}=gptSuggestions;
  //console.log()

  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black  text-white bg-opacity-80'>
      <div>
      {movieNames?.map((movieName,index)=>{
        return (<MovieList key={movieName}
           title={movieName}
           movies={movieResults[index]}/>)
      })}
    </div>
    </div>
  )
}

export default GptMovieSuggestions
