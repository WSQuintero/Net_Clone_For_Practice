import React, { useEffect, useRef, useState } from 'react'
import { useFetchData } from '../../customHooks/useFetchData/useFetchData'
import { ImgMovie } from '../ImgMovie/ImgMovie'
import './imgSlider.css'

function ImgSlider ({ title, url, options, genres }) {
  const elementRef = useRef(null)
  const [widthContainer, setWidthContainer] = useState()
  const { data } = useFetchData(url, options, genres)
  const imgObserved = useRef()

  useEffect(() => {
    const { width } = elementRef.current.getBoundingClientRect()
    setWidthContainer(width)
  }, [])

  useEffect(() => {
    if (imgObserved.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const imageElement = entry.target

              imageElement.src = imageElement.dataset.src
              observer.unobserve(imageElement)
            }
          })
        },
        { threshold: 0.5 } // Ajusta el valor según tus necesidades
      )

      const imageElements = Array.from(
        elementRef.current.querySelectorAll('img')
      )

      imageElements.forEach((imageElement) => {
        observer.observe(imageElement)
      })

      return () => {
        observer.disconnect()
      }
    }
  }, [data])

  const handleScrollLeft = () => {
    elementRef.current.scrollLeft -= widthContainer
  }

  const handleScrollRight = () => {
    elementRef.current.scrollLeft += widthContainer
  }

  return (
    <div>
      <h2 className='text-gray-100'>{title}</h2>
      <div className='relative p-0 mt-5 '>
        <div
          className='flex gap-1 scroll-smooth w-full items-center text-white font-light h-auto   overflow-x-hidden relative '
          ref={elementRef}
        >
          {data?.results?.map((ar, index) => (
            <ImgMovie
              ar={ar}
              imgObserved={imgObserved}
              key={ar.id}
            />
          ))}
        </div>
        <button
          className='z-50 text-white text-xl absolute top-0 bg-black/50 h-full hover:backdrop-blur-sm hover:scale-x-[1.3] transition-all duration-300 px-3 justify-start '
          onClick={handleScrollLeft}
        >
          {'<'}
        </button>
        <button
          className='z-50 text-white text-xl absolute top-0 right-0 bg-black/30 h-full hover:backdrop-blur-sm hover:scale-x-[1.3] transition-all duration-300 px-3 justify-end  '
          onClick={handleScrollRight}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export { ImgSlider }
