import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header';
import { auth } from '../utils/firebase';


const Browse = () => {

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
