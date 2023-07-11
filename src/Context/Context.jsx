import React, { createContext, useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { app, db } from '../services/firebase'
import { collection, addDoc, doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router'

const Context = createContext()

function ContextProvider ({ children }) {
  const navigate = useNavigate()
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
  const addCollectionInDb = async (object, name, id) => {
    try {
      await setDoc(doc(db, name, id), object)
      console.log('Document written')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const searchUserInDb = async (users, user) => {
    const docRef = doc(db, users, user)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      // console.log('Document data:', docSnap.data())
      navigate('/sign-in')
    } else {
      // docSnap.data() will be undefined in this case
      // console.log('No such document!')
      navigate('/sign-up')
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
        addCollectionInDb,
        searchUserInDb
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
