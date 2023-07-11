import React, { createContext, useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { app, db } from '../services/firebase'
import { collection, addDoc } from 'firebase/firestore'

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

  const signInFirebase = ({ email, password }) => {
    const auth = getAuth(app)

    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        return user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        errorMessage.includes('auth/user-not-found') && setError('El usuario no existe')
        errorMessage.includes('auth/missing-password') && setError('Por favor digita la contraseña')
        errorMessage.includes('auth/invalid-email') && setError('Usuario inválido')

        return {
          errorCode,
          errorMessage
        }
      })
  }
  const easyLoad = ({ imgObserved, elementRef }) => {
    if (imgObserved.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const imageElement = entry.target

              imageElement.src = imageElement.dataset.src
              observer.unobserve(imageElement)
            }
          })
        },
        { threshold: 0.5 }
      )

      const imageElements = Array.from(elementRef.current.querySelectorAll('img'))

      imageElements.forEach((imageElement) => {
        observer.observe(imageElement)
      })

      return () => {
        observer.disconnect()
      }
    }
  }
  const addCollectionInDb = async (object, name) => {
    try {
      const docRef = await addDoc(collection(db, name), object)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
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
        setError,
        signInFirebase,
        easyLoad,
        addCollectionInDb
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
