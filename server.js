import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

//config env
dotenv.config();

//database.config
connectDB();

//test object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgCyan.white);
});
