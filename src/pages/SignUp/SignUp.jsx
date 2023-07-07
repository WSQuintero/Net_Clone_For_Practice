import React, { useContext, useState } from 'react'
import { StepOneRegister } from '../../components/StepOneRegister/StepOneRegister'
import { StepTwoRegister } from '../../components/StepTwoRegister/StepTwoRegister'
import { Context } from '../../Context/Context'

function SignUp () {
  const [steps, setSteps] = useState('stepOne')
  const { error } = useContext(Context)

  return (
    <div className='w-full bg-gray-100 h-[100vh] fullCenter '>
      {steps === 'stepOne'
        ? (
        <StepOneRegister
          setSteps={setSteps}
          steps={steps}
        />
          )
        : (
            steps === 'stepTwo' && <StepTwoRegister />
          )}
      {error !== '' && <span className='text-red-500 font-bold text-lg'>{error}</span>}
    </div>
  )
}

export { SignUp }
