import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovies } from '../utils/gptSlice';

const GptSearchBar = () => {

  const dispatch=useDispatch();
  const fetchMovieDetails=async(movie)=>{
   
      const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      const json=await data.json();
      return json.results;
    //return json.results;
    //console.log("Upper",json.results);
    //console.log(json);
    
    
  }
  const selectLanguage=useSelector(store=>store.config.lang
  );
  const searchText =useRef(null);
  const gptSearchClick=async ()=>{
    //Make an openAI call to get the movie return
    const gptQuery="Act as a Movie recommendation system and suggest some movies for the query : "+searchText.current.value
    +". only gives me name of 10 movies, comma separated like the example result given ahead. Example results: Gadar, PK, Don, M.S. Dhoni, Golmaal, Koi Mil Gea";
    const gptResults=await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies=gptResults?.choices[0]?.message?.content.split(",");//conversion of string to array.
    // For each movie will search in TMDB 

    const promiseArray=gptMovies.map((movie)=>{return fetchMovieDetails(movie)})
    //const promiseArray=fetchMovieDetails(gptResults?.choices[0]?.message?.content.split(","));
    //console.log('Promise',promiseArray);

    //console.log('Promuse array');
    const tmdbResults=await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovies({movieNames:gptMovies,movieResults:tmdbResults}));

  }

  return (
    <div className=' pt-[35%] sm:pt-[20%] md:pt-[10%] flex justify-center '>
      <form className='w-full md:w-1/2 bg-black  grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input
        type="text" ref={searchText}
        className='p-4 m-4 col-span-9'
        placeholder={lang[selectLanguage]?.gptSearchPlaceholder}/>
    <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={gptSearchClick}>
    {lang[selectLanguage]?.Search}
    </button>
      </form>
      
    </div>
  )
}

export default GptSearchBar
