import React from 'react'
import { useNavigate } from 'react-router-dom'

function FinalNextButton () {
  const navigate = useNavigate()

  return (
    <button
      className='w-[100%] h-[55px] bg-[#e50914] text-lg text-white mt-3 inline-block'
      onClick={() => navigate('/home')}
    >
      Siguiente
    </button>
  )
}

export { FinalNextButton }
