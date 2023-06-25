import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer'

const Context = createContext()

function ContextProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
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
  }; clickToWindow()

  return (
    <Context.Provider
      value={{
        state,
        changeLenguages,
        listeningWindowInnerWidth,
        isClickOption
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
