import { createContext, useContext, useEffect, useState } from "react";
import { Movie } from "../services/movie-protocol";

interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const context = createContext<MovieContextType>();

export function useMovieContext() {
  return useContext(context);
}

export function MovieProvider({ children }: React.PropsWithChildren) {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const favoritesItems = localStorage.getItem("favorites");

    if (favoritesItems) setFavorites(JSON.parse(favoritesItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((old) => [...old, movie]);
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((old) => old.filter((item) => item.Id !== id));
  };

  const isFavorite = (id: number): boolean => {
    return favorites.some((item) => item.Id === id);
  };

  return (
    <context.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </context.Provider>
  );
}
