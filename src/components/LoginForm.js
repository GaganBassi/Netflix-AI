import React, { useRef, useState } from 'react'
import {checkValidateForm} from '../utils/validate';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";//Import it from firebase docs

import { auth } from '../utils/firebase';// using common auth from firebase.js
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const LoginForm = () => {

    const dispatch=useDispatch();
    const [isSignInForm, setIsSignInForm]=useState(true);
    const navigate=useNavigate();
    

    const email1=useRef(null);
    const password1=useRef(null);
    const fullName=useRef(null);
   // const message=useRef('Gagan');
   const [outputError, setOutputError]=useState('');

    const toggleSignIn=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const validate=()=>{
      //console.log(email1.current.value, password1.current.value); //Way to use the Ref Variable and fetch the current value from 
      //from input box

      const message=checkValidateForm(email1.current.value, password1.current.value);
      console.log(message);
      setOutputError(message);
      if (message) return;// message is there then function should stop and return from here.
      //OR if(message===null){Write sign in and sing up logic here}
      //OR if(!message){Write sign in and sing up logic here}

      //Now we will write sign in and sign up logic here.

      if(!isSignInForm){
        //Sign UP logic from firebase docs nothing fancy.
        createUserWithEmailAndPassword(auth, email1.current.value, password1.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;//it will give user object, if it is success
            console.log(user);
            //console.log('Auth',auth);
            updateProfile(user, {
              displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
             //user will not update but auth.currentUser has all the latest values.
            }).then(() => {
              // Profile updated!
              // ...
              const {uid, email, displayName}=auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));//No need by the way to do this step,
              // if we are using auth.currentUser
              //navigate("/Browse")//once the profile get updated then navigate.
            }).catch((error) => {
              // An error occurred
              // ...
            });
            


          

          // ...

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);
          setOutputError(errorCode+errorMessage)
          // ..
        });
  
      }
      else{
        //Sign In logic using access token and setup the cookies.

        signInWithEmailAndPassword(auth, email1.current.value, password1.current.value)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log("User",user);
        console.log("Auth",auth);
       /* updateProfile(user, {
          displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });*/
        

              
              

        /**console.log('Testing');
        console.log("1",auth.currentUser);
        console.log("2", user);
        if(auth.currentUser=user){
          console.log("Same");
        }**/
        //navigate("/Browse")
    // ...
        })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setOutputError(errorCode+errorMessage)
       console.log(errorCode, errorMessage);
        });


      }

    }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();

      }} className='w-full sm:w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75' >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>

        {isSignInForm===false&&<input type='text' ref={fullName} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-300'/>}
        {/**Claiming above mentioned reference here of email and password */}
        <input type='text' ref={email1}
        placeholder='Email Address' className='p-4 my-4 w-full bg-gray-300'/>
        <input type='password' ref={password1}
        placeholder='Password' className='p-4 my-4 w-full bg-gray-300'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={validate}>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='text-red-500 font-bold text-lg p-2'>{outputError}</p>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm? "New to Netflix? Sign up now.":"Already user? Click to Login"}</p>
      </form>
    </div>
  )
}

export default LoginForm
