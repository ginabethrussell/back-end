const express = require("express");
const db = require("../../database");

const router = express.Router()

router.get("/howtos", (req, res) => {
  const howtos = db.getHowtos()
  res.json(howtos);
})

router.get("/howtos/:id", (req, res) => {
    const id = req.params.id
    const howto = db.getHowtoById(id);
    if (howto) {
        res.json(howto);
    } else {
        res.status(404).json({
            message: "How-to not found"
        })
    }
})

router.post("/howtos", (req,res) => {   
  const newHowtos = db.createHowto({
      title: req.body.title,
      creator_id: req.body.creator_id,
      author: req.body.author,
      paragraphs: req.body.paragraphs,
      date_created: Date.now(),
      image: req.body.image
  })
 
  res.status(201).json(newHowtos);
})

router.delete("/howtos/:id", (req, res) => {
    const id = req.params.id;
    const howto = db.getHowtoById(id);
    if (howto){
        const deletedHowto = db.deleteHowto(id)
        return res.status(200).json(deletedHowto);
    }else {
        return res.status(404).json({
            message: "How-to not found"
        })
    }
})

router.put("/howtos/:id", (req, res) => {
    const id = req.params.id;
    const howto = db.getHowtoById(id);
    console.log('howtos before update', db.getHowtos());
    if (howto){
        const updatedHowto = db.updateHowto(id,{
            ...howto,
            title: req.body.title,
            creator_id: req.body.creator_id,
            author: req.body.author,
            paragraphs: req.body.paragraphs,
            image: req.body.image
        })
        console.log('howtos after update', db.getHowtos());
        res.json(updatedHowto);
    }else {
        res.status(404).json({
            message: "How-to not found"
        })
    }
})

router.put("/howtos/:id/likes", (req,res) => {   
    const id = req.params.id;
    const howto = db.getHowtoById(id);
    if (howto){
        const updatedHowto = db.increaseHowtoLikes(id);
        res.json(updatedHowto);
    }else {
        res.status(404).json({
            message: "How-to not found"
        })
    }
  })
module.exports = router;