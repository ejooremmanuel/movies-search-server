export class MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<Rating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

export class Rating {
  Source: string;
  Value: string;
}

export class MovieResponse {
  "Title": string;
  "Year": string;
  "imdbID": string;
  "Type": string;
  "Poster": string;
}

export class SearchResultOfMovieResponse {
  totalResults: "569";
  Response: "True";
  Search: MovieResponse[];
}
