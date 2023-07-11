import React, { useContext } from 'react'
import { ArrowDown } from '../ArrowDown/ArrowDown'
import { Context } from '../../Context/Context'

function BeginButton ({ inputEmail }) {
  const { searchUserInDb } = useContext(Context)

  return (
    <button
      onClick={() => searchUserInDb('users', inputEmail.current.value)}
      className='lg:h-[40px] h-[45px] w-[130px] text-center justify-between flex text-gray-100  bg-[rgb(193,17,25)] rounded-md mt-4 font-netflix-bold font-bold items-center px-2'
    >
      Comenzar
      <ArrowDown />
    </button>
  )
}

export { BeginButton }
