const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRouter = require("./data/users/users-router");
const howtosRouter = require("./data/howtos/howtos-router");
const welcomeRouter = require("./data/welcome/welcome-router");

require('dotenv').config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(usersRouter);
server.use(howtosRouter);
server.use(welcomeRouter);


module.exports = server;

