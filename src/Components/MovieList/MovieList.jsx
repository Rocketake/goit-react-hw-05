import { Link, useLocation } from "react-router-dom"


const MovieList = ({ movies }) => {
	const location = useLocation()
	console.log(location);
	return (
		<div>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<Link to={`/movies/${movie.id.toString()}`} state={location}>{movie.title}
						</Link>
					</li>
				)
				  
				)}
			</ul>
		</div>
	)
}
export default MovieList