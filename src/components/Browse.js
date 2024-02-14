import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { auth } from '../utils/firebase';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingVideo from '../hooks/useUpcomingVideo';
import useTrendingMovies from '../hooks/useTrendingMovies';


const Browse = () => {

  //Moving the fetch code to custom Hook (useNowPlayingMovies.js)

  useNowPlayingMovies();//fetching of API and pushing data to redux store 
  usePopularMovies();
  useUpcomingVideo();
  useTrendingMovies();
  
  console.log("test1")
  
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
      {/* Outline of the browse page
        Main Container
            -Video background
            -Video Title
        Secondary Container
            -Movie List *n
            -cards*n
      */}
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse
