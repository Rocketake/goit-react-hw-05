import { Suspense, useEffect, useState } from "react"
import s from "./MovieReviews.module.css"
import { getMoviesDetailsReviews } from "../../Services/api"
import { useParams } from "react-router-dom"

const MovieReviews = () => {
 const { movieId } = useParams()

  

    const [reviews, setReviews] = useState(null)
    
    useEffect(() => {
    
      try {
        const fetchData = async () => {
          const {results} = await getMoviesDetailsReviews(movieId)
        setReviews(results)
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
      
      {reviews && !reviews.length && <p>We don`t have any reviews for this movie</p>}
      {(reviews?.map((review) => (
        <div key={review.id} className={s.review}>
          
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </div>
      
)))}
    </div>
  )
}

export default MovieReviews