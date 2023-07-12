import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { useFetchData } from '../../customHooks/useFetchData/useFetchData'
import { useNavigate } from 'react-router'

function MovieDetail () {
  const navigate = useNavigate()
  const { actualMovie } = useContext(Context)
  const videos = useFetchData(
    `https://api.themoviedb.org/3/movie/${actualMovie?.id}/videos`
  )?.data

  const finalVideos = videos?.results[Math.floor(Math.random() * (videos?.results?.length - 1)) + 1]?.key

  return (
    <section className='h-[100vh] text-white'>
      <div className='relative h-0 pb-[56.25%] overflow-hidden'>
        <iframe
          src={`https://www.youtube.com/embed/${finalVideos}`}
          className='absolute top-0 left-0 w-full h-full'
        ></iframe>
      </div>

      <button onClick={() => navigate('/home')}>{'<-'}</button>
    </section>
  )
}

export { MovieDetail }
