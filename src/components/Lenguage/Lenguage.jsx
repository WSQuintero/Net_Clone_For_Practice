import React from 'react'
import { WorldSvg } from '../WolrdSvg/WorldSvg'

function Lenguage () {
  return (
    <div className='flex items-center justify-center gap-2 bg-black/30 border border-gray-500 py-1 px-2'>
      <WorldSvg />
      <select className=' bg-transparent text-gray-100 font-netflix-medium custom-select  '>
        <option value='english' className='bg-gray-800/60 '>
          English
        </option>
        <option value='español'>Español</option>
      </select>
    </div>
  )
}

export { Lenguage }
