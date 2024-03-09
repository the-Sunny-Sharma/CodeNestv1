import express from "express";
import { config } from "dotenv";
import errorMiddleware from "./middlewares/Error.js";

config({
  path: "./config/config.env",
});

const app = express();

//Importing and using routes

import course from "./routes/courseRoutes.js";

app.use("/api/v1/", course);

export default app;

app.use(errorMiddleware);
