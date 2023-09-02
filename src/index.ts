import express from "express";
import logger from "morgan";
import "colors";
import { appRouter } from "./routes/index.routes";
import { connectDB } from "./config/db";
import cors from "cors";
import path from "path";
import { searchRouter } from "./routes/search.routes";

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(logger("dev"));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1/movies/", appRouter);
app.use("/api/v1/searches/", searchRouter);

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

// app.use("*", function (req, res) {
//   res.status(404).json({ message: "route does not exist" });
// });
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || "5000";
const server = app.listen(PORT, async () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
  await connectDB();
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close Server & exit Process

  server.close(() => process.exit(1));
});
