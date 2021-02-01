const express = require('express')
const users = require('./users')

const db = require("../../database");

const router = express.Router()

router.get("/users", (req, res) => {
    const users = db.getUsers()
    res.json(users)
})

router.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = db.getUserById(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            message: "User not found"
        })
    }
    
})

router.post("/users", (req,res) => {
    const newUser = db.createUser({
        username: req.body.username,
        password:  req.body.password,
        role: req.body.role
    })
    // 201 means a created resource
    res.status(201).json(newUser);
})

module.exports = router;