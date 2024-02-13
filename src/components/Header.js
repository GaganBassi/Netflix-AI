import React from 'react'
import {auth} from '../utils/firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const dispatch=useDispatch();
  const selector=useSelector((store)=>{return store.user})
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {

      navigate('/')// Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });

  }
  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black  z-10 flex justify-between'>
      <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="Something Went Wrong"/>

      { auth?.currentUser && <div className='flex'>
        <img className='w-12 h-12 p-2' alt ="User icon" src="https://occ-0-7328-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6eRequest Method:GET"/>
      
        <button onClick={handleSignOut} className='font-bold text-white'>{auth?.currentUser?.displayName}</button>
      </div>}

      

      {/* Having Logo of Netflix */}

    </div>
  )
}

export default Header
