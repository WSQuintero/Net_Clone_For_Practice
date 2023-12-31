import { useEffect, useState } from 'react'

function useGetVideo () {
  const [movies, setMovies] = useState('')
  const [videos, setVideos] = useState('')
  const apiKey = import.meta.env.VITE_API_KEY_MOVIE

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
      signal
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies))

    return () => {
      controller.abort() // Cancelar la solicitud cuando se desmonte el componente
    }
  }, [])

  useEffect(() => {
    if (movies.results) {
      const controller = new AbortController()
      const signal = controller.signal

      const id =
        movies.results[Math.floor(Math.random() * movies.results.length) + 1].id

      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
        { signal }
      )
        .then((response) => response.json())
        .then((data) => setVideos(data.results))

      return () => {
        controller.abort()
      }
    }
  }, [movies])

  return videos
}

export { useGetVideo }
