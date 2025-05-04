import { MovieService } from "./movie";

const API_URL = import.meta.env.VITE_API_URL;

export const movieService = new MovieService(API_URL);
