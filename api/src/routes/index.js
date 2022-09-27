const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerRecipes = require('./Recipes.js')
const routerDiests = require('./Diets.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes',routerRecipes)
router.use('/diets',routerDiests)



module.exports = router;
