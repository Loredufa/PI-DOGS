const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios');
const { Dog, Temperament, temperament_dog } = require ('../db')
const { API_KEY } = process.env;
//const { Op } = require('sequelize');
 
const router = Router();

//Configurar los routers
//Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds', {
      headers: {'x-api-key': `${API_KEY}`}});
    const infoApi = await apiUrl.data.map((element) => {
        return {
            id: element.id,
            name: element.name,
            height: element.height.metric,
            weight: element.weight.metric,
            lifeSpan: element.life_span,
            temperament: element.temperament,
            image:element.image.url,
        }
    })
    return infoApi
    }

const getDbInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            },
        })
    }

 const getAllDogs = async () => {
 const infoApi = await getApiInfo();
 const dbInfo = await getDbInfo();
 const infoTotal = infoApi.concat(dbInfo);
  return infoTotal
 }

router.get('/dogs', async (req, res) => {
    const name = req.query.name
    let dogsTotal = await getAllDogs();
    if(name) {
        let dogName = await dogsTotal.filter(element => element.name.toLowerCase().includes(name.toLowerCase()))
        dogName.length ?
        res.status(200).send(dogName) :
        res.status(404).send('Breed not found');
    } else {
        res.status(200).send(dogsTotal)
    }
})

router.get ('/dogs/:id', async (req, res) => {
    const id = req.params.id;
    const dogTotal = await getAllDogs()
    if (id) {
        let dogId = dogTotal.filter( element => element.id == id)
        console.log(dogId)       
        dogId.length?
        res.status(200).json(dogId) :
        res.status(404).send('Dog not found')
    }
})

router.get('/temperament', async (req, res) => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds', {
      headers: {'x-api-key': `${API_KEY}`}});
    const temperament = apiUrl.data.map(element => element.temperament)
    let temperaments = temperament.toString().trim().split(/\s*,\s*/);
    let splittemperament = temperaments.filter(word => word.length > 0);
    splittemperament.forEach(element => {
        Temperament.findOrCreate({
            where: {name: element}
        })
    });
    const allTemperament = await Temperament.findAll();
    res.send(allTemperament);
})

router.post('/dog', async (req,res)=>{
    let {name, height, weight, life_span, image, createdInDb, temperament}= req.body;
    let dogCreated= await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
        createdInDb
    });
    
      let temperamentDb= await Temperament.findAll({
        where:{name : temperament}
    });
    dogCreated.addTemperament(temperamentDb);
    res.send('Dog created successfully');
});


module.exports = router;
