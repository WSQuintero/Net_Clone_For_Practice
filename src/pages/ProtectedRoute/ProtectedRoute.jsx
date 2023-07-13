import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { Home } from '../Home/Home'
import { Context } from '../../Context/Context'

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(Context)
  if (!isAuthenticated) {
    return <Navigate to='/sign-in' replace />
  }

  return <Home/>
}

export { ProtectedRoute }
