const { Router } = require('express');
const { Temperament } = require('../db');
const router = Router();

router.get('/', async (req,res) => {
    const temperaments = await Temperament.findAll()
    res.json(temperaments)
})


module.exports = router