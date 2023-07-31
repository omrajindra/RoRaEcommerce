import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config({ path: "" });

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgCyan.white);
});
