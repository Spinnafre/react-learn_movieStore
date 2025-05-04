export type Movie = {
  Id: number;
  Title: string;
  ReleaseDate: string;
  PosterURL: string;
  Plot: string;
};

export interface IMovieService {
  FindAll(): Promise<Array<Movie>>;
  Search(query: string): Promise<Array<Movie>>;
}

export function MovieMapper(data: any): Array<Movie> {
  return data.map((item: any) => ({
    Id: item.id,
    Title: item.title,
    ReleaseDate: item.year,
    PosterURL: item.poster,
    Plot: item.plot,
  })) as Array<Movie>;
}
