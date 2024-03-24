import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.mjs";
import databaseConn from "./utils/dbConn.mjs";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, () => {
  databaseConn();
  console.log(`server is listening on port no. ${process.env.PORT}`);
});
