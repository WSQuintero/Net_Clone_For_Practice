import React from 'react'
import { StepOneRegister } from '../../components/StepOneRegister/StepOneRegister'
import { StepTwoRegister } from '../../components/StepTwoRegister/StepTwoRegister'

function SignUp () {
  return <div className='w-full bg-gray-100 h-[100vh] fullCenter '>
    <StepOneRegister/>
    <StepTwoRegister/>
  </div>
}

export { SignUp }
