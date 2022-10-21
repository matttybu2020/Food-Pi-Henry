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












//!busqueda por dietas para buscador en el front 
//!Probar -- crear action,contantes,reducer,componente ,funcion y boton
/*

router.get('/',async (req,res)=>{
    const{ name } = req.query
    const recipesDiet=   await InfoApiDbTotal()
    try {
    if(name){

     const recipesDiet = recipesDiet.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
     if(recipesDiet){
       return  res.status(200).send(recipesDiet)
     }
    }
    return res.status(200).send(recipesDiet)
    } catch (error) {
        console.log(error)
     return   res.status(404).send('No existe ese tipo de dieta')
    }
})

*/


   



module.exports = router