import React from 'react'
import { NextButton } from '../NextButton/NextButton'
import { CheckRed } from '../CheckRed/CheckRed'

function StepTwoRegister () {
  return (
    <div className=' min-w-[350px]  max-w-[420px] flex flex-col items-center p-2'>
      <span className='text-sm'>
        PASO <strong>2</strong> DE <strong>3</strong>
      </span>
      <h2 className='font-netflix font-bold text-3xl'>Selecciona tu plan</h2>
      <ul className='mt-6 flex flex-col gap-4 w-4/5'>
        <li className='text-md mt-4 text-gray-700 flex gap-3 font-bold'>
          <CheckRed />
          Sin compromisos, cancela cuando quieras.
        </li>
        <li className='text-md text-gray-700 flex gap-3 font-bold'>
          <CheckRed />
          Todo Netflix a un bajo costo.
        </li>
        <li className='text-md text-gray-700 flex gap-3 font-bold'>
          <CheckRed />
          Disfruta sin límites en todos tus dispositivos.
        </li>
      </ul>
      <div className='mt-10 w-full'>
        <NextButton />
      </div>
    </div>
  )
}

export { StepTwoRegister }
