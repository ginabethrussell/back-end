const express = require("express");
const howtos = require("./howtos");

const db = require("../../database");

const router = express.Router()

router.get("/howtos", (req, res) => {
  const howtos = db.getHowtos()
  res.json(howtos);
})

router.get("/howtos/:id", (req, res) => {
  const id = req.params.id
  const updatedHowtos = howtos.filter(howto => howto.id !== id);
  res.json(updatedHowtos); 
})

router.post("/howtos", (req,res) => {
    
  const newHowto = db.createHowto({
      title: req.body.title,
      creator_id: req.body.creator_id,
      author: req.body.author,
      paragraphs: req.body.paragraphs,
      date_created: Date.now()
  })
  // 201 means a created resource
  res.status(201).json(newHowto);
})

router.delete("/howtos/:id", (req, res) => {
    const id = req.params.id;
    console.log('id', id)
    const howto = db.getHowtoById(id);
    console.log('howto', howto)
    if (howto){
        db.deleteHowto(id)
        res.status(204).end();
    }else {
        res.status(404).json({
            message: "How-to not found"
        })
    }
})

router.put("/howtos/:id", (req, res) => {
    const id = req.params.id;
    const howto = db.getHowtoById(id);
    if (howto){
        const updatedHowto = db.updateHowto(id,{
            ...howto,
            title: req.body.title,
            creator_id: req.body.creator_id,
            author: req.body.author,
            paragraphs: req.body.paragraphs,
        })
        res.json(updatedHowto);
    }else {
        res.status(404).json({
            message: "How-to not found"
        })
    }
})

module.exports = router;