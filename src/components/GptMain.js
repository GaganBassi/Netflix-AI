import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { IMG_Login_Back } from '../utils/constant'
import { supportedLanguages } from '../utils/languageConstant'

const GptMain = () => {
  return (
    <div>
      
        
      <div className='fixed -z-10'>
      
        <img className='h-screen object-cover' src={IMG_Login_Back} alt="Background Image"/>
        
      </div>
      <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
      {/* GPT Search
          GPT Movie Suggestions
      */}
       
      
    </div>
  )
}

export default GptMain
