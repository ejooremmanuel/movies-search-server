import axios from "axios";
import asyncHandler from "express-async-handler";

export const findMovies = asyncHandler(async (req, res, next): Promise<any> => {
  const { q } = req.query;
  const result = await axios.get<{}>(`${process.env.MOVIE_API}t=${q}`);

  return res.status(200).json(result.data);
});
