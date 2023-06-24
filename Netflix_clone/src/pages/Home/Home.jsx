import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

function Home () {
  const { hola } = useContext(Context)
  return (
    <div>{hola} soy santiago</div>
  )
}

export { Home }
