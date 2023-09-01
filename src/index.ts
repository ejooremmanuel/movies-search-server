import express from "express";
import logger from "morgan";
import "colors";
import { appRouter } from "./routes/index.routes";

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/api/v1/movies/", appRouter);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close Server & exit Process

  server.close(() => process.exit(1));
});
