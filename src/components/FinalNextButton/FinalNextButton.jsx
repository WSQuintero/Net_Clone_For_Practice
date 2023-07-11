import React from 'react'
import { useNavigate } from 'react-router-dom'

function FinalNextButton ({ setSteps, steps, email, password }) {
  const navigate = useNavigate()
  
  const sendForm = (event) => {
    navigate('/home')
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

export { FinalNextButton }
