import MovieCard from "../components/MovieCard";
import { movies } from "../data";
import NavBar from "../components/NavBar";

function Home() {

  const movieList = movies.map(movie => {
    return <MovieCard key={movie.title} title={movie.title} />
  })

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movieList}
      </main>
    </>
  );
};

export default Home;
