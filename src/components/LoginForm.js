import React, { useRef, useState } from 'react'
import {checkValidateForm} from '../utils/validate';

const LoginForm = () => {

    const [isSignInForm, setIsSignInForm]=useState(true);

    

    const email1=useRef(null);
    const password1=useRef(null);
   // const message=useRef('Gagan');
   const [output, setOutput]=useState('');

    const toggleSignIn=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const validate=()=>{
      //console.log(email1.current.value, password1.current.value); //Way to use the Ref Variable and fetch the current value from 
      //from input box

      const message=checkValidateForm(email1.current.value, password1.current.value);
      console.log(message);
      setOutput(message);
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();

      }} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75' >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>

        {isSignInForm===false&&<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-300'/>}
        {/**Claiming above mentioned reference here of email and password */}
        <input type='text' ref={email1}
        placeholder='Email Address' className='p-4 my-4 w-full bg-gray-300'/>
        <input type='password' ref={password1}
        placeholder='Password' className='p-4 my-4 w-full bg-gray-300'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={validate}>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='text-red-500 font-bold text-lg p-2'>{output}</p>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm? "New to Netflix? Sign up now.":"Already user? Click to Login"}</p>
      </form>
    </div>
  )
}

export default LoginForm
