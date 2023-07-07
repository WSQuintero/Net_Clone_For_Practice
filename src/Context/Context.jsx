import React, { createContext, useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../services/firebase'

const Context = createContext()

function ContextProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [error, setError] = useState('')
  const changeLenguages = {
    hideLenguages: () => dispatch({ type: 'HIDE_LENGUAGE' }),
    showLenguages: () => dispatch({ type: 'SHOW_LENGUAGE' }),
    showMenuLenguages: () => dispatch({ type: 'SHOW_MENU_LENGUAGE' }),
    hideMenuLenguages: () => dispatch({ type: 'HIDE_MENU_LENGUAGE' })
  }
  const listeningWindowInnerWidth = () => {
    if (window.innerWidth > 600) changeLenguages.showLenguages()
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        changeLenguages.showLenguages()
        changeLenguages.showMenuLenguages()
      } else {
        changeLenguages.hideLenguages()
        changeLenguages.hideMenuLenguages()
      }
    })
  }
  const isClickOption = (event) => {
    event.stopPropagation()
    if (!state.lenguage) changeLenguages.showMenuLenguages()
  }
  const clickToWindow = () => {
    if (!state.lenguage && state.menuLenguage) {
      window.addEventListener('click', (event) => {
        event.stopPropagation()
        changeLenguages.hideMenuLenguages()
      })
    }
  }
  clickToWindow()

  const signUpFirebase = ({ email, password }) => {
    const auth = getAuth(app)

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        return user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorMessage.includes('email-already-in-use')) {
          setError('EL correo electrònico ya se encuentra registrado')
        }
        return {
          errorCode,
          errorMessage
        }
      })
  }

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 2000)
  }, [error])

  return (
    <Context.Provider
      value={{
        state,
        changeLenguages,
        listeningWindowInnerWidth,
        isClickOption,
        signUpFirebase,
        error,
        setError
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
