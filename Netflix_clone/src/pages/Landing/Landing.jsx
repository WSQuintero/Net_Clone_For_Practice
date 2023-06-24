import React from 'react'
import { Main } from '../../components/Main/Main'
import { Logo } from '../../components/Logo/Logo'
import { Lenguage } from '../../components/Lenguage/Lenguage'
import './Landing.css'

function Landing () {
  const backGroundImage =
    'https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/6df01d4b-de02-4e92-9faa-159d4d5fa06d/CO-es-20230619-popsignuptwoweeks-perspective_alpha_website_small.jpg'

  return (
    <>
      <div className=' min-h-[100vh] w-full absolute z-10'>
        <header className='flex w-full justify-between py-7 px-8 '>
          <Logo />
          <div className='flex gap-3'>
            <Lenguage />
            <button className='bg-[rgb(193,17,25)] text-gray-100 font-netflix-bold font-bold text-[10px] px-3 py-2 rounded-md'>
              Iniciar sesión
            </button>
          </div>
        </header>
        <Main>
          <section className='w-full font-netflix-medium  text-gray-100 flex flex-col justify-center items-center px-6'>
            <h1 className='font-netflix-bold font-bold text-[28px] text-center mt-10'>
              Películas, series ilimitadas y mucho más
            </h1>
            <p className='mt-4 text-center'>
              Disfruta donde quieras. Cancela cuando quieras.
            </p>
            <p className='mt-4 text-center w-[90%]'>
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
            </p>
            <input
              type='email'
              placeholder='Email'
              className='mt-5 w-5/6 h-10 px-3 bg-black/60 border border-gray-400 focus:border-2 focus:border-gray-300 focus:outline-none focus:placeholder:text-[10px] focus:flex focus:items-start   '
              autoComplete='email'
            />
            <button className=' flex text-gray-100 p-3 bg-[rgb(193,17,25)] rounded-md mt-4 font-netflix-bold font-bold'>
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
          </section>
        </Main>
      </div>
      <div className='relative z-0 '>
        <div className=' h-full  w-full'>
          <div className=' z-0 min-h-[100vh] object-cover'>
            <img
              alt=''
              aria-hidden='true'
              src={backGroundImage}
              className='h-[70vh] object-cover object-left '
            />
          </div>
          <div className='gradient '></div>
        </div>
      </div>
    </>
  )
}

export { Landing }
