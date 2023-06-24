import React, { useEffect, useState } from 'react'
import { Main } from '../../components/Main/Main'
import { Logo } from '../../components/Logo/Logo'
import { Lenguage } from '../../components/Lenguage/Lenguage'
import './Landing.css'

function Landing () {
  const [hideLenguage, setHideLenguage] = useState(false)
  const [clickOption, setClickOption] = useState(false)

  const innerWidth = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        setHideLenguage(true)
        setClickOption(true)
      } else {
        setHideLenguage(false)
        setClickOption(false)
      }
    })
  }

  useEffect(() => {
    innerWidth()
  }, [hideLenguage])
  return (
    <div className={'background'}>
      <div className='gradient '></div>
      <header className='flex w-full justify-between py-7 px-8 absolute '>
        <Logo />
        <div className='flex gap-3'>
          <Lenguage
            hideLenguage={hideLenguage}
            clickOption={clickOption}
            setClickOption={setClickOption}
          />
          <button className='bg-[rgb(193,17,25)] text-gray-100 font-netflix-bold font-bold text-[10px] px-3 py-2 rounded-md'>
            Iniciar sesión
          </button>
        </div>
      </header>
      <Main>
        <section className='w-full font-netflix-medium  text-gray-100 flex flex-col justify-center items-center px-[33px] absolute mt-[95px]'>
          <h1 className='font-netflix-bold font-bold text-[30px] text-center mt-10 w-[99%]'>
            Películas, series ilimitadas y mucho más
          </h1>
          <p className='mt-4 text-center w-full text-lg'>
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
          <p className='mt-4 text-center w-[90%]'>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>
          <div className=' flex flex-col sm:flex-row w-4/5 sm:flex sm:gap-4 sm:justify-between justify-center items-center'>
            <input
              type='email'
              placeholder='Email'
              className='mt-5 w-5/6 h-[45px] px-3 bg-black/60 border border-gray-400 focus:border-2 focus:border-gray-300 focus:outline-none focus:placeholder:text-[10px] focus:flex focus:items-start   '
              autoComplete='email'
            />
            <button className=' h-[45px] w-[130px] text-center justify-between flex text-gray-100  bg-[rgb(193,17,25)] rounded-md mt-4 font-netflix-bold font-bold items-center px-2'>
              Comenzar
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='Hawkins-Icon Hawkins-Icon-Standard'
                data-name='ChevronRight'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z'
                  className='fill-gray-100'
                ></path>
              </svg>
            </button>
          </div>
        </section>
      </Main>
    </div>
  )
}

export { Landing }
