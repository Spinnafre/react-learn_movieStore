import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { MovieCard } from "../components/MovieCard";
import { movieService } from "../services";
import { Movie } from "../services/movie-protocol";
import "../styles/Home.css";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    if (!searchQuery.trim()) return;

    setLoading(true);

    try {
      const results = await movieService.Search(searchQuery);

      setMovies(results);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  }

  async function findMovies() {
    try {
      setLoading(true);

      const result = await movieService.FindAll();
      console.log(result);
      setMovies(result);
    } catch (error) {
      console.error(error);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    findMovies();
  }, []);

  return (
    <div className="home-page">
      <form className="search-movies-form" onSubmit={handleSearch}>
        <input
          type="search"
          name="search-input"
          id="search-input"
          className="search-input"
          disabled={loading}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <div className="movies-container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.Id} />;
          })}
        </div>
      )}
    </div>
  );
}
