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
      <div className='relative p-0 mt-5'>
        <div
          className='flex gap-1 scroll-smooth w-full items-center text-white font-light h-[150px] overflow-y-hidden overflow-x-hidden relative transition-all'
          ref={elementRef}
        >
          {data?.results?.map((ar, index) => (
            <ImgMovie ar={ar} imgObserved={imgObserved} key={ar.id} />
          ))}
        </div>
        <div className='absolute top-0 w-full justify-between flex items-center h-full text-gray-100 text-2xl opacity-0 transition-all hover:opacity-100'>
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
