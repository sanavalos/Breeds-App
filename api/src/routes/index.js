const { Router } = require('express');

const dogs = require('./dogs.js')
const temperaments = require('./temperaments.js')

const axios = require ('axios');
const { Dog, Temperament } = require('../db');

const router = Router();

router.use('/dogs', dogs)
router.use('/temperaments', temperaments)

const allApiTemperaments = async () => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
    const tempsRepeated = apiUrl.data.map(dog => dog.temperament).toString();
    const tempsArray = tempsRepeated.split(' ').join('').split(",")
    const setTemperaments = new Set(tempsArray.sort())
    const arrayTemperaments = Array.from(setTemperaments).filter(t => t !== '')
    arrayTemperaments.forEach(t => {
        Temperament.findOrCreate({
            where: {name: t}
        })
    })
    const allTemperaments = await Temperament.findAll();
    return allTemperaments
}
allApiTemperaments()


module.exports = router;
