import React, { createContext } from 'react'

const Context = createContext()

function ContextProvider ({ children }) {
  const hola = 'hola'

  return (
  <Context.Provider
    value={{
      hola
    }}>
      {children}
  </Context.Provider>
  )
}

export { ContextProvider, Context }
