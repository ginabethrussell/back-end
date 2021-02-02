const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersRouter = require("./data/users/users-router");
const howtosRouter = require("./data/howtos/howtos-router");
const welcomeRouter = require("./data/welcome/welcome-router");

require('dotenv').config();

const server = express();

server.use(express.json());
server.use(helmet());
// server.use(cors());
server.options('*', cors());
server.use(usersRouter);
server.use(howtosRouter);
server.use(welcomeRouter);


server.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    message: "A server error has occurred",
  });
});

module.exports = server;
