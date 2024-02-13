import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'

import { createBrowserRouter, Outlet, RouterProvider, useNavigate, useRouteError } from 'react-router-dom'
import Error from './Error'
import { onAuthStateChanged } from 'firebase/auth'
import {auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

    const dispatch=useDispatch();
    //const navigate=useNavigate();
    const routes=createBrowserRouter(
        [
            {
                path:'/',
                element:<Login/>,
                errorElement:<Error/>
            },
            {
                path:'/browse',
                element:<Browse/>
            }
        ]
    )

    useEffect(()=>{
        //Whenver user SignIn/ Sign Up / Sign Out this API call happen.
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user

              const {uid, email, displayName}=auth.currentUser;

              
              

              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              //navigate('/browse');
              //const uid = user.uid;
              // ...

              
            } else {
              // User is signed out
              // ...

              dispatch(removeUser());
              //navigate('/');
            }
          });

    },[])

  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
        {/**This is important, we give routes like this, basically, its also running the root.render cmd */}
    </div>
  )
}

export default Body
