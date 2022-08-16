const { Router } = require('express');
const {API_KEY} = process.env;
const dogs = require('./dogs.js')
const temperaments = require('./temperaments.js')
const axios = require ('axios');
const { Temperament } = require('../db');

const router = Router();

router.use('/dogs', dogs)
router.use('/temperaments', temperaments)

const allApiTemperaments = async () => {
    const apiData = new Promise(function(resolve, reject) {
        resolve(axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`))
        reject('Error in promise')
    })
    const apiMap = await apiData
    const tempsRepeated = apiMap.data.map(dog => dog.temperament).toString();
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
