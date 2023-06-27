import React from 'react'
import { Lenguage } from '../Lenguage/Lenguage'
import { Logo } from '../Logo/Logo'

function BeforeHeader () {
  return (
    <>
      <header className='flex w-full justify-between py-7 px-8 absolute xl:px-60 z-10'>
        <Logo />
        <div className='flex gap-3'>
          <Lenguage />
          <button className='bg-[rgb(193,17,25)] text-gray-100 font-netflix-bold font-bold text-[10px] px-3 py-2 rounded-md'>
            Iniciar sesión
          </button>
        </div>
      </header>
    </>
  )
}

export { BeforeHeader }
