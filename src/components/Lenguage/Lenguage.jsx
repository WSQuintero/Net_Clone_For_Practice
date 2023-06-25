import React, { useContext } from 'react'
import { WorldSvg } from '../WolrdSvg/WorldSvg'
import { Context } from '../../Context/Context'

function Lenguage () {
  const { state, isClickOption } = useContext(Context)

  return (
    <div className='flex items-center justify-center gap-2 bg-black/30 border border-gray-500 py-1 px-2'>
      <WorldSvg />
      <select
        className={
          ' w-auto bg-transparent text-gray-100 font-netflix-medium custom-select'
        }
        onClick={isClickOption}
      >
        <option value='english' className='bg-gray-800/60 w-[50px]  '>
          {state.lenguage || state.menuLenguage ? 'English' : ''}
        </option>
        <option value='español' className='bg-gray-800/60  '>
          {state.lenguage || state.menuLenguage ? 'Español' : ''}
        </option>
      </select>
    </div>
  )
}

export { Lenguage }
