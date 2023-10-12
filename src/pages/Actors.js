import { actors } from "../data";
import NavBar from "../components/NavBar";

function Actors() {
  
  const actorDisplay = actors.map(actor => {
    const movieList = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <article key={actor}>
        <h2>{actor.name}</h2>
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
        <h1>Actors Page</h1>
      </header>
      <main>
        {actorDisplay}
      </main>
    </>
  );
};

export default Actors;
