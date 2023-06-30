import React from 'react'

function ImgMovie ({ ar, imgObserved }) {
  return (
    <>
      <div className='h-full w-[230px] shrink-0'>
        {ar.backdrop_path && (
          <img
            className={'rounded-md h-full transition-opacity '}
            src=''
            alt=''
            ref={imgObserved}
            data-src={`https://image.tmdb.org/t/p/w300${ar.backdrop_path}`}
          />
        )}
        <div
          className={
            'animate-pulse flex space-x-4 bg-gray-300 h-full w-[230px] shrink-0'
          }
        />
      </div>
    </>
  )
}

export { ImgMovie }
