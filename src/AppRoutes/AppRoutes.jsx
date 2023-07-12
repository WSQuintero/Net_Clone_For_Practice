import React, { useContext } from 'react'
import { Navigate, Route, useRoutes } from 'react-router'
import { Home } from '../pages/Home/Home'
import { Landing } from '../pages/Landing/Landing'
import { SignIn } from '../pages/SignIn/SignIn'
import { SignUp } from '../pages/SignUp/SignUp'
import { MovieDetail } from '../pages/MovieDetail/MovieDetail'
import { Context } from '../Context/Context'

function AppRoutes () {
  const { isAuthenticated } = useContext(Context)

  const ProtectedRoute = ({ element: Element, ...rest }) => {
    if (!isAuthenticated) {
      return <Navigate to='/sign-in' replace />
    }

    return <Home/>
  }

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
