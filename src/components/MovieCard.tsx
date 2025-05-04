import { useMovieContext } from "../contexts/MovieContext";
import { Movie } from "../services/movie-protocol";
import "../styles/MovieCard.css";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.Id);

  function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.Id);
      return;
    }

    addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.PosterURL} alt="movie" />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-release-date">{movie.ReleaseDate}</p>
      </div>
      <p className="movie-plot">{movie.Plot}</p>
    </div>
  );
}
