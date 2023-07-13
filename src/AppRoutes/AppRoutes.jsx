import React from 'react'
import { useRoutes } from 'react-router'
import { Landing } from '../pages/Landing/Landing'
import { SignIn } from '../pages/SignIn/SignIn'
import { SignUp } from '../pages/SignUp/SignUp'
import { MovieDetail } from '../pages/MovieDetail/MovieDetail'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <Landing />, exact: true },
    { path: '/home', element: <ProtectedRoute />, exact: true },
    { path: '/sign-in', element: <SignIn />, exact: true },
    { path: '/sign-up', element: <SignUp />, exact: true },
    { path: '/movie-detail/*', element: <MovieDetail /> }
  ])
  return routes
}
export { AppRoutes }
