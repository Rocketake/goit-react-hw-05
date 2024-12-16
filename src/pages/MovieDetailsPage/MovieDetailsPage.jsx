import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { getMoviesDetails } from "../../Services/api"
import { useEffect, useRef, useState } from "react"
import GoBack from "../../Components/GoBack/GoBack"


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


	const location = useLocation()
const backLink = useRef(location.state ?? '/movies');
	

  return (
	  <div>
		  <Link to={backLink.current}><GoBack/></Link>
		<img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt="" />
		  <div>
			  <h2>{details.original_title} {"(" + releaseDate.slice(0, 4) + ")"}</h2>
			  
		  </div>
		  <p>Additional information</p>
		  <ul>
			  <li><Link to="cast">Cast</Link></li>
			  <li><Link to="reviews">Reviews</Link></li>
		  </ul>
		  <Outlet/>
	  </div>
	  
  )
}

export default MovieDetailsPage