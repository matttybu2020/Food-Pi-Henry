const Router = require('express');
const router = Router()
const InfoApiDbTotal = require('../Controllers/getDataTotal.js')
const {Recipe,Diet} = require('../db')
//const { Op } = require('sequelize');



//! Busqueda de recetas 


router.get('/',async (req,res)=>{
    const{ name } = req.query
    const recipes=   await InfoApiDbTotal()
    try {
    if(name){

     const nameRecipes = recipes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
     if(nameRecipes){
       return  res.status(200).send(nameRecipes)
     }
    }
    return res.status(200).send(recipes)
    } catch (error) {
        console.log(error)
     return   res.status(404).send('No existen recetas disponibles')
    }
})



//! Busqueda de receta por id

router.get('/:id',async (req,res)=>{
  const {id} = req.params
  const recipes = await InfoApiDbTotal()
  try {
      if(id){
          const recipesId = recipes.filter(el=>el.id == id)
          if(recipesId){
           return   res.status(200).send(recipesId)
          }
      }
  } catch (error) {
      console.log(error)
     return res.status(404).send('No se encontrĂ³ receta disponible por id')
  }
 
}) 

//! Ruta de Post de Creacion

router.post('/',async (req,res)=>{

  const{image,
     name,
     summary,
     score,
     healthScore,
     steps,
     diets,
     dishTypes,
     createdInDb,
    } = req.body
  try {
  if (!name || !summary || !score || !healthScore || !steps || !dishTypes || !diets){
    return res.status(404).json({msg: "Faltan enviar datos"})

    /*
     if (!name) return res.status(400).send({error: 'Debe ingresar el name para la receta'});
    if (!summary) return res.status(400).send({error: 'Debe ingresar un summary del receta'});
    
    
    */
  }
      const newRecipe = await Recipe.create({
          name,
          summary,
          //score,
          healthScore,
          steps,
          dishTypes,
          image: image
          ? image
          : "https://www.paho.org/sites/default/files/alimentacao-saudavel-diversificada.jpg",
        createdInDb,
         

      })
      const typeDiet = await Diet.findAll({
          where:{
              name:diets
          }
      })
      newRecipe.addDiet(typeDiet)
      res.status(201).send('Receta creada correctamente')
  } catch (error) {
      console.log (error)
  }
})



























//! Ruta Delete 
/*
router.delete('/:id', (req, res, next) =>{
  try{
      const {id} = req.params
      Recipe.destroy({where: {id:id}})
      res.status(200).send('La receta se elimino correctamente')
  }catch(error){
      next(error)
  }
});
*/

//! Ruta put
/*
router.put("recipes/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
     summary,
     healthScore,
     steps,
     //diets,
     dishTypes,
    image,
  } = req.body;

  try {
    await Recipe.update(
      {
        name: name,
        summary: summary,
        healthScore: healthScore,
        steps: steps,
        dishTypes: dishTypes,
        life_span: life_span,
        image: image,

      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).send("Modificacion realizada en Recetas");
  } catch (error) {
    res.status(404).send("No se Actualizo");
  }
});
*/


//** Error 404*/
/*
router.all("*", (_req, res) => {
  res.status(404).send("no se encontro la pagina");
});*/





module.exports = router















