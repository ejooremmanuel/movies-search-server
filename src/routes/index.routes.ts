import { Router } from "express";
import { findMovies } from "../controllers/index.controllers";

const router = Router();

router.get("/", findMovies);

export const appRouter = router;
