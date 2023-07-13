import React, { useContext } from 'react'

import { Home } from '../../pages/Home/Home'
import { Context } from '../../Context/Context'
import { Navigate } from 'react-router'

function ProtectedRoute ({ element: Element, ...rest }) {
  const { state: { isAuthenticated } } = useContext(Context)

  if (!isAuthenticated) {
    return <Navigate to='/sign-in' replace />
  } else {
    return <Home />
  }
}

export { ProtectedRoute }
