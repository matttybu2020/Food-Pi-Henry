const Router = require('express');
const router = Router()
const {Diet,Recipe} = require('../db')
const {dietTypesDb} = require('../Controllers/types')


//! Ruta par dietas 
router.get('/', async (_req, res) => {
    
    try {   
    dietTypesDb.forEach(e => {
            Diet.findOrCreate({
                where: { name: e}
            })
    })
     const diets = await Diet.findAll();
      return res.status(200).send(dietTypesDb)

    } catch (error) {
        console.log(error)
        res.status(404).send('No se encuentran este tipo de dietas disponibles')
    }

})



   



module.exports = router