require('dotenv').config();

const express = require("express");
const usersRouter = require("./data/users/users-router");
const howtosRouter = require("./data/howtos/howtos-router");

const server = express();
server.use(express.json());
server.use(usersRouter);
server.use(howtosRouter);

const port = process.env.PORT || 5000;
server.get("/", (req,res) => {
    res.json({message: "Hello from the How-To Server!"})
})

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
})