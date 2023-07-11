import React, { useState } from 'react'
import { MovieDetail } from '../MovieDetail/MovieDetail'

function ImgMovie ({ ar, imgObserved }) {
  const [isLoad, setIsLoad] = useState(false)
  const [movieDetail, setMovieDetail] = useState(false)

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
            onMouseOver={() => {
              setMovieDetail(true)
            }}
            onMouseLeave={() => {
              setMovieDetail(false)
            }}
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
