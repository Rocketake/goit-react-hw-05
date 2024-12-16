import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { getMoviesDetails } from "../../services/api.js"
import { Suspense, useEffect, useRef, useState } from "react"
import GoBack from "../../components/GoBack/GoBack.jsx"
import s from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
	const { movieId } = useParams()
	const [details, setDetails] = useState([])
	
	useEffect(() => {
	
		try {
		  const fetchData = async () => {
			  const  results  = await getMoviesDetails(movieId)
			setDetails(results)
		  }
		  fetchData()
		} catch (error) {
		  console.log(error);
		}
	  }, [movieId])

	const releaseDate = details.release_date ?? ""
	const genres = details.genres ?? []

	const location = useLocation()
const backLink = useRef(location.state ?? '/movies');
	const userScore = details.vote_average
const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
	  <div>
		  <Link to={backLink.current}><GoBack/></Link>
		  <div className={s.detailsWrapper}>
			  <img src={details.poster_path ? `https://image.tmdb.org/t/p/w200/${details.poster_path}` : defaultImg} 
    alt="poster" />
		  <div className={s.details}>
			  <h2>{details.original_title} {"(" + releaseDate.slice(0, 4) + ")"}</h2>
			  <p>{userScore !== 0 ? `User score:  ${Math.trunc(details.vote_average * 10)}%` : "There is no score for this movie."}</p>
			  <h3>Overview</h3>
			  <p>{details.overview === "" ? "There is no review for this movie." : details.overview}</p>
			  <h3>Genres</h3>
			  <div className={s.genres}> {genres.length > 0 ? genres.map((genre, index) => <p key={genre.id || index}>{genre.name}</p>) : "We don`t have genres for this movie"}</div>
		  </div>
		</div>
		  <p>Additional information</p>
		  <ul className={s.info}>
			  <li><Link to="cast">Cast</Link></li>
			  <li><Link to="reviews">Reviews</Link></li>
		  </ul>
		  <Suspense fallback="Loading info">
			<Outlet />
		  </Suspense>
	  </div>
	  
  )
}

export default MovieDetailsPage