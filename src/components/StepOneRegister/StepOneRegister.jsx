import React, { useRef } from 'react'
import { NextButton } from '../NextButton/NextButton'

function StepOneRegister ({ setSteps, steps }) {
  const email = useRef(null)
  const password = useRef(null)
  const nameUser = useRef(null)

  const styleInput = 'h-[50px] w-full px-3 border border-gray-600 text-gray-500'

  const inputs = [
    {
      type: 'text',
      placeholder: 'Nombre',
      className: styleInput,
      reference: nameUser
    },
    {
      type: 'email',
      placeholder: 'Email',
      className: styleInput,
      reference: email
    },
    {
      type: 'password',
      placeholder: 'Agrega una contraseña',
      className: styleInput,
      reference: password
    }
  ]

  return (
    <form className=' min-w-[300px] w-[80%] max-w-[420px] p-2 flex flex-col fullCenter text-center'>
      <span className='text-sm'>
        PASO <strong>1</strong> DE <strong>3</strong>
      </span>
      <h1 className='font-netflix font-bold text-[24px] '>
        Crea una contraseña para que comiences tu membresía
      </h1>
      <p className='text-md mt-4 text-gray-500 w-full'>
        ¡Unos pasos más y listo!
      </p>
      <p className='text-md text-gray-500 w-full'>
        Tampoco nos gustan los trámites.
      </p>
      <div className='flex flex-col gap-2 mt-5 w-full'>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            className={input.className}
            ref={input.reference}
          />
        ))}
      </div>
      <NextButton
        password={password}
        email={email}
        nameUser={nameUser}
        setSteps={setSteps}
        steps={steps}
      />
    </form>
  )
}

export { StepOneRegister }
