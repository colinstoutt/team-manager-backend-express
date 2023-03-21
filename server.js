const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const Team = require("./models/TeamModel");
const Recruit = require("./models/RecruitModel");
const Player = require("./models/PlayerModel");
const Game = require("./models/GameModel");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
require("dotenv").config();

// database Config
require("./config/database");

app.get("/", async (req, res) => {
  const teams = await Team.find();
  const players = await Player.find();
  const recruits = await Recruit.find();
  const games = await Game.find();
  res.json({ data: teams, players, recruits, games });
});

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
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}...`));
