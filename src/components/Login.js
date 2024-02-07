import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/f5106312-05b7-4d50-8160-9f28090c28c0/CA-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
         alt="Background Image Loading."/>
         {/** Having Background image of Netflix */}
    

         
      </div>
      <LoginForm/>
    </div>
  )
}

export default Login
