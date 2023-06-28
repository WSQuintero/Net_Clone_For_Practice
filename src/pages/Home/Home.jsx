import React from 'react'
import { PlayIcon } from '../../components/PlayIcon/PlayIcon'
import { InformationIcon } from '../../components/InformationIcon/InformationIcon'
import { Gradient } from '../../components/Gradient/Gradient'
import { ImgSlider } from '../../components/ImgSlider/ImgSlider'
import './Home.css'

function Home () {
  return (
    <div>
      <section className='background relative flex flex-col justify-center h-[100vh]'>
        <div className='h-[100vh] opacity-[20%] '>
          <Gradient />
        </div>
        <div className='absolute ml-20'>
          <img
            alt=' '
            className=' '
            src='https://occ-0-2612-3934.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXiiSSMTz9uBWmZNLjhOMCLveuBLGJmaIt_XWFTkIQ0u7ftJPCIQ1UV2UISlVEgINAZvSxGtEmNnf4YKhIr9-BwcyPPnDJLqegsOp0ookvzczoh4wLftX_rp16cU8kg7Un78ASIcB___MagXKtw3yALIhBqUa5TtCislKvqadXI8a8vIRz_FVw.webp?r=46b'
            title=' '
          />
          <p className='w-3/6 mt-5 text-gray-100'>
            Ocho ladrones toman rehenes en la Fábrica Nacional de Moneda y
            Timbre de España, mientras el líder de la banda manipula a la
            policía para cumplir con su plan.
          </p>
          <div className='flex mt-10 gap-5 '>
            <button className='flex gap-2 bg-gray-100 px-6 py-3 rounded-md text-gray-800 items-center justify-center'>
              <PlayIcon />
              Reproducir
            </button>
            <button className='flex gap-2  px-6 py-3 rounded-md text-gray-100 items-center justify-center bg-gray-600'>
              <InformationIcon />
              Más información
            </button>
          </div>
        </div>
      </section>
      <section className=' pl-10 shadow-4xl -mb-px relative -top-[60px] flex flex-col gap-10'>
        <ImgSlider
          title='Populares en Netflix'
          url='https://api.themoviedb.org/3/movie/popular'
        />
        <ImgSlider
          title='Tendencias'
          url='https://api.themoviedb.org/3/movie/top_rated'
        />
      </section>
    </div>
  )
}

export { Home }
