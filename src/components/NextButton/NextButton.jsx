import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

function NextButton ({ setSteps, email, password }) {
  const { signUpFirebase } = useContext(Context)

  const sendForm = (event) => {
    event.preventDefault()
    signUpFirebase({
      email: email.current.value,
      password: password.current.value
    }).then((user) => {
      return user.errorCode && user.errorMessage ? '' : setSteps('stepTwo')
    })
  }

  return (
    <button
      className='w-[100%] h-[55px] bg-[#e50914] text-lg text-white mt-3 inline-block'
      onClick={sendForm}
    >
      Siguiente
    </button>
  )
}

export { NextButton }
