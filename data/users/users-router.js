const express = require('express')
const db = require("../../database");

const router = express.Router()

router.get("/users", (req, res) => {
    const users = db.getUsers()
    res.json(users)
})

router.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = db.getUserById(id);
    console.log(user, id);
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
    const responseBody = {
        user: newUser,
        token: "QpwL5tke4Pnpja7X4"
    }
    res.status(201).json(responseBody);
})

router.post("/users/login", (req,res) => {
    const loggedInUser = db.loginUser({
        username: req.body.username,
        password:  req.body.password,
    })
    if(loggedInUser){
        const responseBody = {
            id: loggedInUser.id,
            token: "QpwL5tke4Pnpja7X4"
        }
        res.status(200).json(responseBody);
    }else {
        res.status(404).json({ message: 'User not found.'})
    }
    
})

module.exports = router;