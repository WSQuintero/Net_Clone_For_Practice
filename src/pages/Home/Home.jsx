import React from 'react'
import { PlayIcon } from '../../components/PlayIcon/PlayIcon'
import { InformationIcon } from '../../components/InformationIcon/InformationIcon'
import { Gradient } from '../../components/Gradient/Gradient'
import { ImgSlider } from '../../components/ImgSlider/ImgSlider'
import { useFetchData } from '../../customHooks/useFetchData/useFetchData'

import './Home.css'
import { useGetVideo } from '../../customHooks/useGetVideo/useGetVideo'

function Home () {
  const { data } = useFetchData('https://api.themoviedb.org/3/genre/movie/list')
  const videos = useGetVideo()
  const key = videos[Math.floor(Math.random() * videos?.length) + 1]?.key
  const exampleImg =
  'https://occ-0-2612-3934.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXiiSSMTz9uBWmZNLjhOMCLveuBLGJmaIt_XWFTkIQ0u7ftJPCIQ1UV2UISlVEgINAZvSxGtEmNnf4YKhIr9-BwcyPPnDJLqegsOp0ookvzczoh4wLftX_rp16cU8kg7Un78ASIcB___MagXKtw3yALIhBqUa5TtCislKvqadXI8a8vIRz_FVw.webp?r=46b'

  return (
    <>
      <section className=' relative flex flex-col justify-center h-[100vh] w-full'>
        <div className='relative h-0 pb-[56.25%] overflow-hidden '>
          <iframe
            src={key && `https://www.youtube.com/embed/${key}?autoplay=1`}
            className='absolute top-0 left-0 w-full h-full'
            autoPlay
          />
        </div>
        <div className='w-full h-[100vh] opacity-[20%] '>
          <Gradient />
        </div>
        <div className='absolute  ml-20 flex flex-col sm:w-[50%] mt-10'>
          <img
            alt=' '
            className='max-w-full flex justify-center'
            src={exampleImg}
            title=' '
          />
          <p className='sm:w-3/6 mt-5 sm:text-gray-100 w-[80%] text-gray-100 text-left text-sm'>
            Ocho ladrones toman rehenes en la Fábrica Nacional de Moneda y
            Timbre de España, mientras el líder de la banda manipula a la
            policía para cumplir con su plan.
          </p>
          <div className='flex flex-col sm:flex-row mt-10 gap-10 sm:gap-5 mb-10'>
            <button className='w-[150px]  h-[40px] flex gap-2 bg-gray-100 px-6 py-3 rounded-md text-gray-800 items-center justify-center'>
              <PlayIcon />
              Reproducir
            </button>
            <button className=' w-[240px] h-[40px] flex gap-2  px-6 py-3 rounded-md text-gray-100 items-center justify-center bg-gray-600'>
              <InformationIcon />
              Más información
            </button>
          </div>
        </div>
      </section>
      <section className=' pl-10 shadow-4xl -mb-px relative -top-[60px] flex flex-col  h-auto mt-10 sm:mt-0'>
        <div className='h-auto'>
          <ImgSlider
            title='Populares en Netflix'
            url='https://api.themoviedb.org/3/movie/popular'
          />
        </div>
        <div className='mt-10'>
          <ImgSlider
            title='Tendencias'
            url='https://api.themoviedb.org/3/movie/top_rated'
          />
        </div>
        {data?.genres?.map((genre) => (
          <div className='mt-10' key={genre.id}>
            <ImgSlider
              title={genre.name}
              url={' https://api.themoviedb.org/3/discover/movie'}
              genres={`&with_genres=${genre.id}`}
            />
          </div>
        ))}
      </section>
    </>
  )
}

export { Home }
