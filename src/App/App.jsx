import React from 'react'
import { Main } from '../components/Main/Main'
import { Footer } from '../components/Footer/Footer'
import { AppRoutes } from '../AppRoutes/AppRoutes'
import { BeforeHeader } from '../components/BeforeHeader/BeforeHeader'
import { AfterHeader } from '../components/AfterHeader/AfterHeader'
import { useLocation } from 'react-router-dom'

function App () {
  const location = useLocation().pathname.toLowerCase()

  return (
    <>
      {location === '/' && <BeforeHeader />}
      {location === '/home' && <AfterHeader />}
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </>
  )
}

export default App
