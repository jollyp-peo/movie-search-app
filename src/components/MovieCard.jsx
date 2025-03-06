import '../styles/style.css'
const MovieCard = ({ movies })=> {

  return(
    <div className="movies-container">

      {movies.map((singleMovie)=> (
        <div key={singleMovie.imdbID} className="movie-card">

          <div className="card-image">
            <img src={ singleMovie.Poster} alt={singleMovie.Poster} />
          </div>
      
          <div className="title">
          <h2>{singleMovie.Title}</h2>
          <p>Year: {singleMovie.Year}</p>
          </div>
        </div>

       )) 
      }

    </div>
  )
}
export default MovieCard;