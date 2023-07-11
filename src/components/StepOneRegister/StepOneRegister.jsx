import React, { useRef } from 'react'
import { NextButton } from '../NextButton/NextButton'

function StepOneRegister ({ setSteps, steps, setError }) {
  const email = useRef(null)
  const password = useRef(null)
  const nameUser = useRef(null)

  return (
    <form className=' min-w-[350px] max-w-[420px] p-2 flex flex-col fullCenter'>
      <span className='text-sm'>
        PASO <strong>1</strong> DE <strong>3</strong>
      </span>
      <h1 className='font-netflix font-bold text-[29px] text-start'>
        Crea una contraseña para que comiences tu membresía
      </h1>
      <p className='text-md mt-4 text-gray-500 w-full'>
        ¡Unos pasos más y listo!
      </p>
      <p className='text-md text-gray-500 w-full'>
        Tampoco nos gustan los trámites.
      </p>
      <div className='flex flex-col gap-2 mt-5 w-full'>
        <input
          type='text'
          placeholder='Nombre'
          className='h-[50px] w-full px-3 border border-gray-600 text-gray-500'
          ref={nameUser}
        />
        <input
          type='email'
          placeholder='Email'
          className='h-[50px] w-full px-3 border border-gray-600 text-gray-500'
          ref={email}
        />
        <input
          type='password'
          placeholder='Agrega una contraseña'
          className='h-[50px] w-full px-3 border border-gray-600'
          ref={password}
        />
      </div>
      <NextButton
        password={password}
        email={email}
        nameUser={nameUser}
        setSteps={setSteps}
        steps={steps}
        setError={setError}
      />
    </form>
  )
}

export { StepOneRegister }
