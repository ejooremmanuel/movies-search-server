import axios from "axios";
import asyncHandler from "express-async-handler";
import {
  MovieDetails,
  SearchResultOfMovieResponse,
} from "../types/movie.types";

export const findMovies = asyncHandler(async (req, res): Promise<any> => {
  const { q } = req.query;
  const result = await axios.get<{
    search: Array<SearchResultOfMovieResponse>;
  }>(`${process.env.MOVIE_API}s=${q}`);

  res.status(200);
  return res.json(result.data);
});

export const getMovieById = asyncHandler(async (req, res): Promise<any> => {
  const { movieId } = req.params;
  const result = await axios.get<MovieDetails>(
    `${process.env.MOVIE_API}i=${movieId}`
  );

  res.status(200);

  return res.json(result.data);
});
