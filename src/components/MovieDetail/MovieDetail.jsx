import React from 'react'

function MovieDetail ({ img, setMovieDetail }) {
  return (
    <article
      className=' absolute top-0 w-[330px] h-[330px] bg-gray-100 z-20 rounded-xl overflow-hidden'
      onMouseOver={(event) => {
        event.stopPropagation()
        setMovieDetail(true)
      }}
      onMouseLeave={(event) => {
        event.stopPropagation()
        setMovieDetail(false)
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300/${img}`}
        alt=''
        className='w-full'
      />
      <div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span></span>
      </div>
      <div>
        <h2></h2>
        <span></span>
        <p></p>
        <span></span>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </article>
  )
}

export { MovieDetail }
