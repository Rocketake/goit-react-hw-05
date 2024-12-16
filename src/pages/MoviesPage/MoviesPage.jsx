import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { getMoviesByQuery } from '../../Services/api'
import MovieList from '../../Components/MovieList/MovieList'

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
          console.log(results);
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