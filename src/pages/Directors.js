import { directors } from "../data";
import NavBar from "../components/NavBar";

function Directors() {
  
  const directorDisplay = directors.map(director => {
    const movieList = director.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <article key={director}>
        <h2>{director.name}</h2>
        <ul>
          {movieList}
        </ul>
      </article>
    )
  })
  
  return (
    <>
      <header>
         <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directorDisplay}
      </main>
    </>
  );
};

export default Directors;
