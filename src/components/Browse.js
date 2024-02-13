import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { auth } from '../utils/firebase';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {

  //Moving the fetch code to custom Hook (useNowPlayingMovies.js)

  useNowPlayingMovies();//fetching of API and pushing data to redux store 
  
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
        Browse
    </div>
  )
}

export default Browse
