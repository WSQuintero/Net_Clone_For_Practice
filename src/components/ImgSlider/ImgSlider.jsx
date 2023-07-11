import React, { useContext, useEffect, useRef, useState } from 'react'
import { useFetchData } from '../../customHooks/useFetchData/useFetchData'
import { ImgMovie } from '../ImgMovie/ImgMovie'
import { Context } from '../../Context/Context'
import './imgSlider.css'

function ImgSlider ({ title, url, options, genres }) {
  const { easyLoad } = useContext(Context)
  const elementRef = useRef(null)
  const imgObserved = useRef()
  const [widthContainer, setWidthContainer] = useState()
  const { data, isLoad } = useFetchData(url, options, genres)
  const temp = Array(10).fill('*')
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const { width } = elementRef.current.getBoundingClientRect()
    setWidthContainer(width)
  }, [])

  useEffect(() => {
    return easyLoad({ imgObserved, elementRef })
  }, [data])

  const handleScrollLeft = () => {
    elementRef.current.scrollLeft -= widthContainer
  }

  const handleScrollRight = () => {
    elementRef.current.scrollLeft += widthContainer
  }
  const onHover = () => {
    setShowButtons(true)
  }
  const hideHover = () => {
    setShowButtons(false)
  }
  return (
    <div>
      <h2 className='text-gray-100'>{title}</h2>
      <div className='relative p-0 mt-5 '>
        <div
          className='flex gap-1 scroll-smooth w-full items-center text-white font-light overflow-x-hidden relative h-[130px] transition-all duration-1000 ease-in-out'
          ref={elementRef}
          onMouseEnter={onHover}
          onMouseLeave={hideHover}
        >
          {isLoad
            ? data?.results?.map((ar, index) => (
                <ImgMovie ar={ar} imgObserved={imgObserved} key={ar.id} />
            ))
            : temp.map((element, index) => (
                <div
                  key={index}
                  className={
                    'animate-pulse flex space-x-4 bg-gray-300 h-full w-[230px] shrink-0   '
                  }
                />
            ))}
        </div>
        {showButtons && (
          <>
            <button
              className='z-50 text-white text-xl absolute top-0 bg-black/50 h-full hover:backdrop-blur-sm hover:scale-x-[1.3] transition-all duration-300 px-3 justify-start '
              onClick={handleScrollLeft}
              onMouseEnter={onHover}
              onMouseLeave={hideHover}
            >
              {'<'}
            </button>
            <button
              className='z-50 text-white text-xl absolute top-0 right-0 bg-black/30 h-full hover:backdrop-blur-sm hover:scale-x-[1.3] transition-all duration-300 px-3 justify-end  '
              onClick={handleScrollRight}
              onMouseEnter={onHover}
              onMouseLeave={hideHover}
            >
              {'>'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export { ImgSlider }
