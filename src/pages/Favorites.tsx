import "../styles/Favorite.css";
import { MovieCard } from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

export function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites-movies">
        <h2>Your favorites movies</h2>

        <div className="movies-container">
          {favorites.map((item: any) => (
            <MovieCard key={item.Id} movie={item} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorite-page-empty">
      <h3>No favorite movies yet. :)</h3>
    </div>
  );
}
