import { useParams } from "react-router-dom";
import { movies } from "../data";

function Movie() {

  const params = useParams();

  const movie = movies.find(movie => movie.title === params.title)

  const {title, time, genres} = movie;

  const genreList = genres.map((genre) => {
    return <span key={`movie_${title}`} >{genre}</span>})

  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{time}</p>
        <div>
          {genreList}
        </div>
      </main>
    </>
  );
};

export default Movie;
