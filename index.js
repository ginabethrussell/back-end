const express = require("express");
const usersRouter = require("./data/users/users-router");
const howtosRouter = require("./data/howtos/howtos-router");

const server = express();
server.use(express.json());
server.use(usersRouter);
server.use(howtosRouter);

server.get("/", (req,res) => {
    res.json({message: "Hello from the How-To Server!"})
})

server.listen(8080, () => {
    console.log("server started");
})