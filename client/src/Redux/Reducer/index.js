
import {GET_ALL_RECIPES ,GET_ALL_TYPES,SAVE_PAGE,CLEAN_FILTER,GET_NAME,GET_RECIPES_BY_ID ,FILTER_BY_TYPES_DIETS,ORDER_NAME,ORDER_SCORE,FILTER_ORIGEN,ADD_FAVORITES,REMOVE_FAVORITES} from "../Actions/Contantes"


const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    detail:[],
    favorites: [],
    pages:1

}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_RECIPES:
          return {
            ...state,
            recipes: action.payload,
            allRecipes: action.payload
          }
        case GET_ALL_TYPES:
          return {
            ...state,
            diets: action.payload
          }
          case CLEAN_FILTER:
            return {
              ...state,
              recipes: action.payload,
              detail: action.payload
              
            }

          case GET_RECIPES_BY_ID:
            return{
                ...state,
                detail: action.payload
            }

          case SAVE_PAGE:
            return {
              ...state,
              pages: action.payload
            }
            case GET_NAME:
              return {
                ...state,
                recipes: action.payload
              }

            /*  case FILTER_BY_TYPES_DIETS:

            const recipes_All = state.allRecipes

            const filtByDiets = action.payload === 'tipos' ? 
            state.allRecipes : recipes_All.filter(recipe => {
                console.log(recipe.diets.length)
                if (recipe.diets.length > 0) {
                    if(recipe.diets.find(element => element === action.payload)) return recipe
                }
                
                if ((action.payload === 'vegetarian') && (recipe.hasOwnProperty('vegetarian')) && (recipe.vegetarian === true)) return recipe
                
                if ((action.payload === 'dairyFree') && (recipe.hasOwnProperty('dairyFree')) && (recipe.dairyFree === true)) return recipe
                })
            return{
                ...state,
                recipes: filtByDiets
            }  */





              case FILTER_BY_TYPES_DIETS:

                const recipes = state.allRecipes
                const recipesFiltered = action.payload === 'tipos' ? recipes : recipes.filter(el => el.diets.includes(action.payload))
          
          
                return {
                  ...state,
                  recipes: recipesFiltered
                }

                case ORDER_NAME:

                  const sortName = action.payload === 'asc' ? state.recipes.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                      return 1
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                      return -1
                    }
                    return 0
                  }) :
                    state.recipes.sort(function (a, b) {
                      if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                      }
                      if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1
                      }
                      return 0
                    })
                  return {
                    ...state,
                    recipes: action.payload === 'All' ? state.recipes : sortName
                  }

                  case ORDER_SCORE:
                    const sortScore = action.payload === 'min' ? state.recipes.sort(function (a, b) {
                      if (a.healthScore > b.healthScore) {
                        return 1
                      }
                      if (b.healthScore > a.healthScore) {
                        return -1
                      }
                      return 0
                    }) :
                      state.recipes.sort(function (a, b) {
                        if (a.healthScore > b.healthScore) {
                          return -1
                        }
                        if (b.healthScore > a.healthScore) {
                          return 1
                        }
                        return 0
                      })
                    return {
                      ...state,
                      recipes: action.payload === 'default' ? state.recipes : sortScore
                    }

                    case FILTER_ORIGEN:
      const filterByOrigen = action.payload === "created"? state.allRecipes.filter(el=> el.createdInDb): state.allRecipes.filter(el=>!el.createdInDb)

      return {
        ...state,
        recipes: filterByOrigen
      }

      case ADD_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter( (recipe) => recipe.id !== action.payload
        ),
      };


              
          default:
            return { ...state };
        }
    }
  
    export default rootReducer;