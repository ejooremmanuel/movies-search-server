import { Router } from "express";
import {
  findMovies,
  getMovieById,
  getRecentSearches,
} from "../controllers/index.controllers";

const router = Router();

router.get("/find", findMovies);
router.get("/:movieId", getMovieById);
router.get("/searches", getRecentSearches);

export const appRouter = router;
