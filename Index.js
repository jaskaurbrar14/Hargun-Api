const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Load the variables from .env file
dotenv.config();
const PORT = process.env.SERVER_PORT || 5050;

app.listen(PORT, () => {
  console.log(PORT);
  console.log(`running at http://localhost:${PORT}`);
});
