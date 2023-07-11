import React, { useRef } from 'react'
import { BeginButton } from '../BeginButton/BeginButton'

function BeginContainer () {
  const inputEmail = useRef(null)

  return (
    <div className='mt-10 flex flex-col items-center justify-center sm:flex-row sm:justify-center gap-3  w-[100%] lg:w-[60%]'>
      <input
        type='email'
        placeholder='Email'
        className='w-4/6 h-[45px] px-3 mt-5 lg:h-[40px] bg-black/60 border border-gray-400 focus:border-2 focus:border-gray-300 focus:outline-none focus:placeholder:text-[10px] focus:flex focus:items-start text-gray-100'
        autoComplete='email'
        ref={inputEmail}
      />
      <BeginButton inputEmail={inputEmail} />
    </div>
  )
}

export { BeginContainer }
