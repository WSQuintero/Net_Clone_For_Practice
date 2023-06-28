import { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const [data, setData] = useState(null)
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    setIsLoad(false)
    fetch(`${url}?api_key=b3fc6649fc92621542cc6e31b7975930`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(setIsLoad(true))
  }, [])

  return {
    data,
    isLoad
  }
}

export { useFetchData }
