//creating the routes 

'use strict';

// taking routing functionality from express .
const express = require('express');
const { clothes } = require('../models/index');
//this router will have all of our router 
const router = express.Router();

//Routes
router.post('/clothes', addedNewcloth); //for create
router.get('/clothes', getclothes);// for read
router.get('/clothes/:id', getclothByID);
router.put('/clothes/:id', updateclothes);
router.delete('/clothes/:id', deleteclothes);



async function getclothes(req, res) {
    //findAll => return arrays of objects 
    let Clothes = await clothes.findAll();
    res.status(200).json(Clothes);
}

async function addedNewcloth(req, res) {
    let newOne = req.body;
    let cloth = await clothes.create(newOne);
    res.status(201).json(cloth);
}

async function updateclothes(req, res) {
    const id = parseInt(req.params.id);
    let updatedOne = req.body;
    let updatedcloth=await clothes.findOne({ where: { id: id } });
    let updatecloth = await updatedcloth.update(updatedOne);
    res.status(201).json(updatecloth);
}

async function deleteclothes(req, res) {
    const id = parseInt(req.params.id);
    let deletecloth = await clothes.destroy({where: {id}});
    res.status(204).json(deletecloth);
}

async function getclothByID(req, res) {
    const id = parseInt(req.params.id);
    const clothID = await clothes.findOne({ where:{ id: id}});
    res.status(200).json(clothID);
}



module.exports = router;

