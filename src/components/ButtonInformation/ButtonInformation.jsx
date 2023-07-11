import React, { useState } from 'react'
import { Add } from '../Add/Add'

function ButtonInformation ({ children, title }) {
  const [information, setInformation] = useState(false)

  return (
    <>
      <button
        onClick={() => setInformation(!information)}
        className='z-10 cursor-pointer  w-full h-10 bg-gray-300/20 flex justify-between items-center font-semibold p-8 text-sm sm:text-xl lg:2xl text-gray-200 '
      >
        {title}
        <Add />
      </button>
      {information && (
        <article className='w-full  bg-gray-400/50  text-gray-200 p-5 text-justify text-sm sm:text-lg relative   z-0'>
          {children}
        </article>
      )}
    </>
  )
}

export { ButtonInformation }
