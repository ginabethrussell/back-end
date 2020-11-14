const express = require('express');
const Classes = require('./class-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        return res.status(200).json(await Classes.getClasses());
    } catch(error){
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const Class = await Classes.getClassById(req.params.id);
        if(!Class){
            return res.status(400).json({
                message: "Invalid ID"
            })
        }

        return res.status(200).json(Class);
    } catch(error){
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try{
       const updateClass = await Classes.updateClass(req.body, req.params.id);
       return res.status(201).json(updateClass);
    } catch(error){
        next(error);
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        await Classes.removeClass(req.params.id);
        return res.status(204).json({
            message: "Deleted"
        })
    } catch(error){
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const newClass = await Classes.addClass(req.body);
        return res.status(201).json(newClass)
    } catch(error){
        next(error)
    }
})

module.exports = router;