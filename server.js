const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
