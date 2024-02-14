import React from 'react'
import useVideoTrailer from '../hooks/useVideoTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = (props) => {
    const trailerSelector=useSelector((store)=>{
        return store.movies?.trailerVideo;
    })
    console.log('Redux',trailerSelector);
    const {movieId}=props;
    //fetch trailer video from different api by passing movie ID
    //custom Hook
    useVideoTrailer(movieId);

    //trailer key will pass to youtube embedded link
  return (
    <div className='w-screen'>
        
    <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${trailerSelector?.key}` + "?&autoplay=1&mute=1"} 
    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    {/* 
    ?&autoplay=1&mute=1 to autoplay the video on UI
  */}
      
  </div>
  )
}

export default VideoBackground
