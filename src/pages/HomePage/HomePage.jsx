import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../../services/api.js'
import MovieList from '../../components/MovieList/MovieList.js'

const HomePage = () => {
    const [movies, setMovies] = useState([])
  useEffect(() => {

    try {
      const fetchData = async () => {
        const {results} = await getTrendingMovies()
       setMovies(results)
      }
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <div>
      <h1>Trending today</h1>

        <MovieList movies={movies} />

  </div>
  )
}

export default HomePage