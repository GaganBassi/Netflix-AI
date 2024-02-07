import React from 'react'
import Login from './Login'
import Browse from './Browse'

import { createBrowserRouter, Outlet, RouterProvider, useRouteError } from 'react-router-dom'
import Error from './Error'

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

  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
        {/**This is important, we give routes like this, basically, its also running the root.render cmd */}
    </div>
  )
}

export default Body
