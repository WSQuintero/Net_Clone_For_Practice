import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../../Context/Context'

function ImgMovie ({ ar, imgObserved }) {
  const { setActualMovie } = useContext(Context)
  const [isLoad, setIsLoad] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <div className='h-full w-[230px] shrink-0 relative justify-center items-center transition-all cursor-pointer'>
        <div
          className={`animate-pulse flex space-x-4 bg-gray-300 h-full w-[230px] shrink-0 absolute ${
            isLoad && 'hidden'
          } `}
        />
        {ar.backdrop_path && (
          <img
            className={'rounded-md h-full transition-opacity '}
            src=''
            alt=''
            ref={imgObserved}
            data-src={`https://image.tmdb.org/t/p/w300${ar.backdrop_path}`}
            onLoad={() => {
              setIsLoad(true)
            }}

            onClick={() => {
              setActualMovie(ar)
              navigate(`/movie-detail/${ar.title}`)
              sessionStorage.setItem('actualMovie', JSON.stringify(ar))
              window.scrollTo(0, 0)
            }
            }
          />
        )}

        {/* {movieDetail && (
          <MovieDetail img={ar.backdrop_path} setMovieDetail={setMovieDetail} />
        )} */}
      </div>
    </>
  )
}

export { ImgMovie }
