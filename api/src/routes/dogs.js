const { Router } = require('express');
const axios = require('axios')
const { Dog, Temperament } = require('../db');
const router = Router();

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
    const apiInfo = await apiUrl.data.map( dog => {

        return {
            id: dog.id,
            name: dog.name,
            height_min: dog.height.metric.split(' - ')[0],
            height_max: dog.height.metric.split(' - ')[1],
            weight_min: dog.weight.metric.split(' - ')[0],
            weight_max: dog.weight.metric.split(' - ')[1],
            span: dog.life_span,
            image: dog.image.url,
            temperaments: dog.temperament ? dog.temperament : 'We don\'t really know'
        };
    });
    return apiInfo
}

const getDBInfo = async () => {
    let dogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    dogs = dogs.map( e => e.toJSON())
    for (let i = 0; i < dogs.length; i++) {
        let temperaments = []
        for (let j = 0; j < dogs[i].temperaments.length; j++) {
            temperaments.push(dogs[i].temperaments[j].name)
        }
    // change array to string, maybe
        dogs[i].temperaments = temperaments
        temperaments = []
    }
    return dogs
}

const getAllDogs = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDBInfo()
    const allInfo = apiInfo.concat(dbInfo);
    return allInfo
}


router.get('/', async (req, res) => {
    const {name} = req.query
    let dogsTotal = await getAllDogs()
    if(name){
        let dogName = await dogsTotal.filter( dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        dogName.length ? res.status(200).send(dogName) : res.status(404).send('Dog not found!')
    } else {
        res.status(200).send(dogsTotal)
    }
})

router.post('/', async (req,res) => {
    let { name, height_min,height_max, weight_min, weight_max, span, temperaments, createdInDb } = req.body
    let dogCreated = await Dog.create({
        name, height_min, height_max, weight_min, weight_max, span, temperaments, createdInDb
    })
    let temperamentDb = await Temperament.findAll({
        where: { name: temperaments}
    })
    dogCreated.addTemperament(temperamentDb)
    res.status(200).send('Dog created successfully!')
})

router.get('/:idBreed', async (req,res) => {
    const { idBreed } = req.params
    const dogsTotal = await getAllDogs()
    if(idBreed){
        let dogId = await dogsTotal.filter( dog => dog.id == idBreed)
        dogId.length ? res.status(200).json(dogId) : res.status(404).json('Dog hasn\'t been found')
    }
})

module.exports = router