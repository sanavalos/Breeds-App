const { Router } = require('express');
const axios = require('axios')
const {API_KEY} = process.env;
const { Dog, Temperament } = require('../db');
const router = Router();


const getApiInfo = async () => {
    const apiData =  await (axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`))
    const apiInfo = apiData.data.map( dog => {
    return {
        id: dog.id,
        name: dog.name,
        height_min: dog.height.metric.split(' - ')[0] ? dog.height.metric.split(' - ')[0] : 'Unknown',
        height_max: dog.height.metric.split(' - ')[1] ? dog.height.metric.split(' - ')[1] : 'Unknown',
        weight_min: dog.weight.metric.split(' - ')[0] ? dog.weight.metric.split(' - ')[0] : 'Unknown',
        weight_max: dog.weight.metric.split(' - ')[1] ? dog.weight.metric.split(' - ')[1] : 'Unknown',
        span: dog.life_span ? dog.life_span : 'Unknown',
        image: dog.image.url,
        temperaments: dog.temperament ? dog.temperament : 'Temperament is unknown'
    };
    })
    return apiInfo
};

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
    const { name } = req.query
    try {
        let dogsTotal = await getAllDogs()
        if(name){
            let dogName = await dogsTotal.filter( dog => dog.name.toLowerCase().includes(name.toLowerCase()))
            dogName.length ? res.status(200).send(dogName) : res.status(404).send('Dog not found!')
        } else {
            res.status(200).send(dogsTotal)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

router.post('/', async (req,res) => {
    let { name, height_min,height_max, weight_min, weight_max, span, temperaments, image, createdInDb } = req.body
    try {
     if(req.body){
      let dogCreated = await Dog.create({
       name, height_min, height_max, weight_min, weight_max, span: `${span} years`, temperaments, image, createdInDb
      })
      let temperamentDb = await Temperament.findAll({
          where: { name: temperaments}
      })
      dogCreated.addTemperament(temperamentDb)
      res.status(200).send('Dog created successfully!')
     } else {
      res.status(400).json({error: 'Body is empty!'})
     }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/:idBreed', async (req,res) => {
    const { idBreed } = req.params
    try {
        const dogsTotal = await getAllDogs()
        if(idBreed){
            let dogId = await dogsTotal.filter( dog => dog.id == idBreed)
            dogId.length ? res.status(200).json(dogId) : res.status(404).json('Dog hasn\'t been found')
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

module.exports = router