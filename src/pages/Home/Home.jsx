import React, { useEffect, useState } from 'react'
import { PlayIcon } from '../../components/PlayIcon/PlayIcon'
import { InformationIcon } from '../../components/InformationIcon/InformationIcon'
import { Gradient } from '../../components/Gradient/Gradient'
import { ImgSlider } from '../../components/ImgSlider/ImgSlider'
import './Home.css'
import { useFetchData } from '../../customHooks/useFetchData/useFetchData'

function Home () {
  const [movies, setMovies] = useState('')
  const [videos, setVideos] = useState('')
  const { data } = useFetchData('https://api.themoviedb.org/3/genre/movie/list')
  // const movies = useFetchData(
  //   'https://api.themoviedb.org/3/movie/popular'

  // )

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=b3fc6649fc92621542cc6e31b7975930'
    ).then((data) => data.json())
      .then((movies) => setMovies(movies))
  }, [])

  useEffect(() => {
    if (movies.results) {
      const id = movies?.results[
        Math.floor(Math.random() * movies?.results?.length) + 1
      ].id

      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b3fc6649fc92621542cc6e31b7975930`
      )
        .then((response) => response.json())
        .then((data) => setVideos(data.results))
    }
  }, [movies])

  console.log()
  return (
    <>
      <section className=' relative flex flex-col justify-center h-[100vh]'>
        <div className='relative h-0 pb-[56.25%] overflow-hidden'>
          <iframe
            src={`https://www.youtube.com/embed/${
              videos[Math.floor(Math.random() * videos?.length) + 1]
                ?.key
            }?autoplay=1`}
            className='absolute top-0 left-0 w-full h-full'
            autoPlay
          />
        </div>
        <div className='h-[100vh] opacity-[20%] '>
          <Gradient />
        </div>
        <div className='absolute w-[50%] ml-20'>
          <img
            alt=' '
            className='w-[50vw]'
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
      <section className=' pl-10 shadow-4xl -mb-px relative -top-[60px] flex flex-col  h-auto'>
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
