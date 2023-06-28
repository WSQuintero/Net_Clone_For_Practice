import React, { useEffect, useRef, useState } from 'react'
import { useFetchData } from '../../customHooks/useFetchData/useFetchData'

function ImgSlider ({ title, url }) {
  const elementRef = useRef(null)
  const [widthContainer, setWidthContainer] = useState()
  const { data } = useFetchData(url)

  useEffect(() => {
    const { width } = elementRef.current.getBoundingClientRect()
    setWidthContainer(width)
  }, [])

  const handleScrollLeft = () => {
    elementRef.current.scrollLeft -= widthContainer
  }

  const handleScrollRight = () => {
    elementRef.current.scrollLeft += widthContainer
  }

  return (
    <div>
      <h2 className='text-gray-100'>{title}</h2>
      <div className='relative p-0 mt-5'>
        <div
          className='flex gap-1 scroll-smooth w-full items-center text-white font-light h-[150px] overflow-y-hidden overflow-x-hidden relative transition-all'
          ref={elementRef}
        >
          {data?.results?.map((ar, index) => (
            <div className='h-full w-[230px] shrink-0' key={index}>
              <img
                className='rounded-md h-full'
                src={`https://image.tmdb.org/t/p/w500${ar.backdrop_path}`}
                alt=''
              />
            </div>
          ))}
        </div>
        <div className='absolute top-0  w-full  justify-between flex items-center h-full text-gray-100 text-2xl opacity-0 transition-all hover:opacity-100'>
          <button
            className='bg-black/50 h-full hover:backdrop-blur-sm hover:scale-x-[1.3] transition-all duration-300 px-3 justify-start '
            onClick={handleScrollLeft}
          >
            {'<'}
          </button>
          <button
            className='bg-black/30 h-full hover:backdrop-blur-sm hover:scale-x-[1.3] transition-all duration-300 px-3 justify-end  '
            onClick={handleScrollRight}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export { ImgSlider }
