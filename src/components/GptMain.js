import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { IMG_Login_Back } from '../utils/constant'
import { supportedLanguages } from '../utils/languageConstant'

const GptMain = () => {
  return (
    <div>
    
        
      <div className='absolute -z-10'>
      
        <img src={IMG_Login_Back} alt="Background Image"/>
        
      </div>
      {/* GPT Search
          GPT Movie Suggestions
      */}
       
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptMain
