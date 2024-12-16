import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import { getMoviesByQuery } from '../../services/api.js'
import MovieList from '../../components/MovieList/MovieList'

const MoviesPage = () => {
const [searchParams, setSearchParams] = useSearchParams()

const handleSetParams = (query) => {
    setSearchParams({ "query": query})
  }

const query = searchParams.get("query")
  
const [searchMovies, setSearchMovies] = useState([])
  
useEffect(() => {
    
      try {
        const fetchData = async () => {
           if (!query) return;
          const {results} = await getMoviesByQuery(query)
        setSearchMovies(results)
        }
        fetchData()
      } catch (error) {
        console.log(error);
      }
      }, [query])

  
  return (
    <div>
      <SearchBar handleSetParams={handleSetParams} />
      <MovieList movies={searchMovies}/>
  </div>
  )
}

export default MoviesPage