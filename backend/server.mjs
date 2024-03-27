import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

//routes for api
import userRoutes from "./Routes/userRoutes.mjs";
import mediaRoutes from "./Routes/mediaRoutes.mjs";
import blogRoutes from "./Routes/blogRoutes.mjs";

//importing database connection
import databaseConn from "./utils/dbConn.mjs";

import { fileURLToPath } from "url";
import path from "path";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//making path for static file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", mediaRoutes);
app.use("/api/v1", blogRoutes);
app.use("/api/v1/media", express.static(path.join(__dirname, "media")));

app.listen(process.env.PORT, () => {
  databaseConn();
  console.log(`server is listening on port no. ${process.env.PORT}`);
});
