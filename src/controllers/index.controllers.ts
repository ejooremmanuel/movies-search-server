import axios from "axios";
import asyncHandler from "express-async-handler";
import { MovieDetails } from "../types/movie.types";
import Search from "../../model/Search";

export const findMovies = asyncHandler(async (req, res): Promise<any> => {
  const { q } = req.query;

  const findSimilarSearchWord = await Search.find({
    query: q,
  });

  if (!findSimilarSearchWord.length) {
    await Search.create({ query: q });
  }

  const result = await axios.get(`${process.env.MOVIE_API}s=${q}`);

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
export const getRecentSearches = asyncHandler(
  async (req, res): Promise<any> => {
    const result = (await Search.find()).reverse();

    res.status(200);

    return res.json(result.slice(0, 6));
  }
);
