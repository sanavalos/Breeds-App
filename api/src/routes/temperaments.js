const { Router } = require('express');
const { Temperament } = require('../db');
const router = Router();

router.get('/', async (req,res) => {
    try {
        const temperaments = await Temperament.findAll()
        res.json(temperaments)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


module.exports = router