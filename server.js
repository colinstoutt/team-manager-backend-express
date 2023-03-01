const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
require("dotenv").config();

// database Config
require("./config/database");

// routers
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
const teamRouter = require("./routes/teamRoutes");
app.use("/manager", teamRouter);
const playerRouter = require("./routes/playerRoutes");
app.use("/manager", playerRouter);
const recruitRouter = require("./routes/recruitRoutes");
app.use("/manager", recruitRouter);
const gameRouter = require("./routes/gameRoutes");
app.use("/manager", gameRouter);

// port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}...`));
