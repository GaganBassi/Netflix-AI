import React, { useEffect } from 'react'
import {auth} from '../utils/firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'

import { addUser, removeUser } from '../utils/userSlice'

import { logo } from '../utils/constant';
import { toggleGpt } from '../utils/gptSlice';
import { supportedLanguages } from '../utils/languageConstant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  
  const dispatch=useDispatch();
  const selector=useSelector((store)=>{return store.user})
  const showGpt=useSelector((store)=>{return store.gpt.showGpt})
  
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {

      //navigate('/')// Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });

  }
  const handleGptSearchClick=()=>{
    dispatch(toggleGpt());
  }

  useEffect(()=>{
    //Whenver user SignIn/ Sign Up / Sign Out this API call happen.
    const unSubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user

          const {uid, email, displayName}=auth.currentUser;

          
          

          dispatch(addUser({uid:uid, email:email, displayName:displayName}));
          //navigate('/browse');
          //const uid = user.uid;
          // ...

            navigate('/Browse')// if user is logged in already redirect to to browse page directly
          
        } else {
          // User is signed out
          // ...

          dispatch(removeUser());
          navigate('/');
          //if user is not logged In always redirect to Login page.
        }
      });

      return ()=>unSubscribe();//Unmount or unsubscribe the onAuthStateChanged function
      //because useEffect here runs once while initial rendering but Header component might render multiple times
      //which results in call of useEffect func as well multiple times, so to avoid this, its better to unmount/ Unsubscribe.

},[]);
const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value));
}
  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black  z-10 flex justify-between bg-transparent
    flex-col md:flex-row sm:flex-row'>
      {/** here flex-col is default for smaller devices--small size devices.
       * sm--tailwind for devices greater than smaller size---medium size devices.
       * md--tailwind for devices greater than medium devices---larger size devices.
       */}
      <img className="w-40 mx-auto md:m-0 sm:mx-auto" src={logo}
      alt="Something Went Wrong"/>

      { auth?.currentUser && <div className='flex p-2 justify-between'>

        {/**Dropdown using map function */}
        {showGpt && <select onChange={handleLanguageChange} className='p-3 m-1  bg-gray-900 opacity-70 text-white '>
          {supportedLanguages.map((language)=>{
            return(<option key={language.identifier} value={language.identifier}>{language.name}</option>)
          })}
          
        </select>}
      <button onClick={handleGptSearchClick} className='py-2 h-12 px-4 mx-4 bg-purple-800 text-white rounded-lg my-1 hover:cursor-pointer'>{showGpt===false?"GPT Search":"Netflix"}</button>
        <img className='w-12 h-12 p-2 hidden md:block ' alt ="User icon" src="https://occ-0-7328-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6eRequest Method:GET"/>
        <button onClick={handleSignOut} className='font-bold bg-white rounded-lg text-black'>{auth?.currentUser?.displayName}(Sign out)</button>
      </div>}

      

      {/* Having Logo of Netflix */}

    </div>
  )
}

export default Header
