import React from 'react'
import { useRoutes } from 'react-router'
import { Home } from '../pages/Home/Home'
import { Landing } from '../pages/Landing/Landing'
import { SignIn } from '../pages/SignIn/SignIn'
import { SignUp } from '../pages/SignUp/SignUp'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <Landing />, exact: true },
    { path: 'home', element: <Home />, exact: true },
    { path: 'sign-in', element: <SignIn />, exact: true },
    { path: 'sign-up', element: <SignUp />, exact: true }
  ])
  return routes
}
export { AppRoutes }
