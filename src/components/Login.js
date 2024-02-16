import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import { IMG_Login_Back } from '../utils/constant'
//import { checkValidateForm, checkValidateForm } from '../utils/validate'

const Login = () => {

  
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='h-screen object-cover' src= {IMG_Login_Back}
         alt="Background Image Loading."/>
         {/** Having Background image of Netflix */}
    

         
      </div>
      <LoginForm/>
    </div>
  )
}

export default Login
