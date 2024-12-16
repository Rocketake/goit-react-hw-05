import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../../Services/api'
import MovieList from '../../Components/MovieList/MovieList'

const HomePage = () => {
    const [movies, SetMovies] = useState([])
  useEffect(() => {

    try {
      const fetchData = async () => {
        const {results} = await getTrendingMovies()
       SetMovies(results)
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