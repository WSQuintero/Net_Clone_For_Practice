import React from 'react'
import { WorldSvg } from '../WolrdSvg/WorldSvg'

function Lenguage ({ hideLenguage, clickOption, setClickOption }) {
  const isClickOption = (event) => {
    event.stopPropagation()
    if (hideLenguage === false) setClickOption(true)
  }

  if (!hideLenguage && clickOption) {
    window.addEventListener('click', (event) => {
      event.stopPropagation()
      setClickOption(false)
    })
  }
  return (
    <div className='flex items-center justify-center gap-2 bg-black/30 border border-gray-500 py-1 px-2'>
      <WorldSvg />
      <select
        className={ ' w-auto bg-transparent text-gray-100 font-netflix-medium custom-select' }
        onClick={isClickOption}
      >
        <option value='english' className='bg-gray-800/60 w-[50px]  '>
          {hideLenguage || clickOption ? 'English' : ''}
        </option>
        <option value='español' className='bg-gray-800/60  '>
          {hideLenguage || clickOption ? 'Español' : ''}
        </option>
      </select>
    </div>
  )
}

export { Lenguage }
