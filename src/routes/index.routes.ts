import { Router } from "express";
import { findMovies, getMovieById } from "../controllers/index.controllers";

const router = Router();

router.get("/", findMovies);
router.get("/:movieId", getMovieById);

export const appRouter = router;
