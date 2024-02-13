import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'

import { createBrowserRouter, Outlet, RouterProvider,  useRouteError } from 'react-router-dom'
import Error from './Error'
import { onAuthStateChanged } from 'firebase/auth'
import {auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

   
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
//Moving useEffect to Header component as useNavigate will not work here coz useNavigate always work in child component.
   

  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
        {/**This is important, we give routes like this, basically, its also running the root.render cmd */}
    </div>
  )
}

export default Body
