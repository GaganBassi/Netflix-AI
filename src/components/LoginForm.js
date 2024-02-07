import React, { useState } from 'react'

const LoginForm = () => {

    const [isSignInForm, setIsSignInForm]=useState(true);

    const toggleSignIn=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75' >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>

        {isSignInForm===false&&<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-300'/>}
        
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-300'/>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-300'/>
        <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm? "New to Netflix? Sign up now.":"Already user? Click to Login"}</p>
      </form>
    </div>
  )
}

export default LoginForm
