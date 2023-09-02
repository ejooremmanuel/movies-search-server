import { Router } from "express";
import { getRecentSearches } from "../controllers/index.controllers";

const router = Router();

router.get("/", getRecentSearches);

export const searchRouter = router;
