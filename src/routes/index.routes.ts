import { Router } from "express";
import { findMovies, getMovieById } from "../controllers/index.controllers";

const router = Router();

router.get("/", findMovies);
router.get("/:id", getMovieById);

export const appRouter = router;
