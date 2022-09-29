const axios = require("axios").default;
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;

//! Informacion total de la Api

const getDataApi = async () => {
  try {
    const recipeApiUrl = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );

    const recipeInfo = recipeApiUrl.data.results.map((el) => {
      return {
        id: el.id,
        name: el.title,
        healthScore: el.healthScore,
        summary: el.summary,
        image: el.image,
        diets: el.diets,
        dishTypes: el.dishTypes,
        steps: el.analyzedInstructions[0]?.steps.map((el) => el.step),
      };
    });
    console.log(recipeInfo);
    return recipeInfo;
  } catch (error) {
    console.log(error);
  }
};


//! Informacion de la Bd

const infoBaseDato = async () => {
  try {
    const dbRecipe = await Recipe.findAll({
      include: {
        model: Diet,
        attribute: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    var datoDB = JSON.parse(JSON.stringify(dbRecipe, null, 2));
    datoDB.forEach((el) => (el.diets = el.diets.map((el) => el.name)));

    return datoDB;
  } catch (error) {
    console.log(error);
  }
};


//! Infomacion Total

const InfoApiDbTotal = async () => {
  try {
    const apiInfoTotal = await getDataApi();
    const dbrecipe = await infoBaseDato();
    const infoTotal = apiInfoTotal.concat(dbrecipe);
    return infoTotal
  } catch (error) {
    console.log(error);
  }
};



module.exports = InfoApiDbTotal
