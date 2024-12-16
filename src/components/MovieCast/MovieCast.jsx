import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import s from "./MovieCast.module.css"
import { getMoviesDetailsCast } from "../../services/api.js"


const MovieCast = () => {
  const { movieId } = useParams()

  

    const [cast, setCast] = useState(null)
    
    useEffect(() => {
    
      try {
        const fetchData = async () => {
          const {cast} = await getMoviesDetailsCast(movieId)
        setCast(cast)
        }
        fetchData()
      } catch (error) {
        console.log(error);
      }
    }, [movieId])
  
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <div className={s.wrapper}>
      
      {cast && !cast.length && <p>We don`t have cast for this movie</p>}
      {cast?.map((item) => (
        <ul key={item.cast_id}>
         <li> <img src={item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.profile_path}` : defaultImg} 
    alt="portrait" /></li>
          <li>{item.name}</li>
          <li>{item.character}</li></ul>
      
))}
  </div>
  )
}

export default MovieCast