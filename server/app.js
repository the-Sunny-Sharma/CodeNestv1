import express from "express";
import { config } from "dotenv";
import errorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});

const app = express();

//Using middlewares
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(express.json()); //Parse JSON bodies as text/html
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded data with the query
app.use(cookieParser());

//Importing and using routes

import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

app.use("/api/v1/", course);
app.use("/api/v1/", user);

export default app;

app.use(errorMiddleware);
