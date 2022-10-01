
import {GET_ALL_RECIPES ,GET_ALL_TYPES,SAVE_PAGE,CLEAN_FILTER,GET_NAME,GET_RECIPES_BY_ID } from "../Actions/Contantes"


const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    detail:[],
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
              
          default:
            return { ...state };
        }
    }
  
    export default rootReducer;