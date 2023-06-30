import React from 'react'
import { Landing } from '../pages/Landing/Landing'
import { SignIn } from '../pages/SignIn/SignIn'
import { Main } from '../components/Main/Main'
import { BeforeHeader } from '../components/BeforeHeader/BeforeHeader'
import { Footer } from '../components/Footer/Footer'
import { SignUp } from '../pages/SignUp/SignUp'
import { AfterHeader } from '../components/AfterHeader/AfterHeader'
import { Home } from '../pages/Home/Home'

function App () {
  return (
    <>
      {/* <BeforeHeader /> */}
      {/* debe tener la condición de abrirse solo en ciertas páginas */}
      <AfterHeader />
      <Main>

        <Home />
        <Landing />
        <SignIn />
        <SignUp />
      </Main>
      <Footer />
    </>
  )
}

export default App
