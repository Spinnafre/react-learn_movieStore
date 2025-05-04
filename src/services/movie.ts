import { IMovieService, Movie, MovieMapper } from "./movie-protocol";

export class MovieService implements IMovieService {
  constructor(private BASE_URL: string) {}

  // Question: How to properly handle errors?
  async FindAll(): Promise<Array<Movie>> {
    const response = await fetch(this.BASE_URL);

    const data = await response.json();

    return MovieMapper(data);
  }

  // Question: how to properly return the data when a request to external API has made?
  async Search(query: string): Promise<Array<Movie>> {
    const response = await fetch(`${this.BASE_URL}?title=${query}`);

    const data = await response.json();

    return MovieMapper(data);
  }
}
