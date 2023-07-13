import { useEffect, useState } from 'react'

const useFetchData = (url, options, genres = '') => {
  const [data, setData] = useState(null)
  const [isLoad, setIsLoad] = useState(false)
  const controller = new AbortController()
  const signal = controller.signal
  const apiKey = import.meta.env.VITE_API_KEY_MOVIE

  useEffect(() => {
    setIsLoad(false)
    setData(null)
    fetch(`${url}?api_key=${apiKey}${genres}`, {
      signal
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(setIsLoad(true))

    return () => {
      controller.abort()
      setData(null)
      setIsLoad(false)
    }
  }, [])

  return {
    data,
    isLoad
  }
}

export { useFetchData }
