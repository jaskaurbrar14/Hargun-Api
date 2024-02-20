const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/products.js");
app.use("/products", productRoutes);

app.use("/products", express.static("./public"));

// Load the variables from .env file
const PORT = process.env.SERVER_PORT || 5050;

app.listen(PORT, () => {
  console.log(PORT);
  console.log(`running at http://localhost:${PORT}`);
});
