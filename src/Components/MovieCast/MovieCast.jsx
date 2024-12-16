import { useParams } from "react-router-dom"
import { getMoviesDetailsCast } from "../../Services/api"
import { useEffect, useState } from "react"


const MovieCast = () => {
  const { movieId } = useParams()

  

    const [cast, setCast] = useState([])
    
    useEffect(() => {
    
      try {
        const fetchData = async () => {
          const {cast} = await getMoviesDetailsCast(movieId)
          console.log(cast);
        setCast(cast)
        }
        fetchData()
      } catch (error) {
        console.log(error);
      }
      }, [movieId])
  return (
    <div>
      
      {cast.map((item) => (
  <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="" />
))}
  </div>
  )
}

export default MovieCast