import React from 'react'
import { Landing } from '../pages/Landing/Landing'
import { SignIn } from '../pages/SignIn/SignIn'
import { Main } from '../components/Main/Main'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

function App () {
  return (
    <>
      <Header />{/* debe tener la condición de abrirse solo en ciertas páginas */}
      <Main>
        <Landing/>
        <SignIn />
      </Main>
      <Footer/>
    </>
  )
}

export default App
