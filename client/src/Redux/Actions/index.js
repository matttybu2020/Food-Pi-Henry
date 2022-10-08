import axios from "axios";

import {GET_ALL_RECIPES ,GET_ALL_TYPES,SAVE_PAGE,CLEAN_FILTER,GET_NAME,GET_RECIPES_BY_ID,FILTER_BY_TYPES_DIETS,ORDER_NAME,ORDER_SCORE,FILTER_ORIGEN,ADD_FAVORITES,REMOVE_FAVORITES} from "../Actions/Contantes"




//* Ruta de Todas las recetas

export function getAllRecipes (){
    return async function(dispatch){
        const resul = await axios("http://localhost:3001/recipes")
       // console.log(resul)
        dispatch({
            type:GET_ALL_RECIPES,
            payload:resul.data
            
        })
    }
} 

//* Ruta de Todas las recetas Fetch
/*
export const getAllRecipes = () =>(dispatch) =>{
    return fetch("http://localhost:3001/recipes")
    .then((r)=>r.json())
    .then((data)=>dispatch({
        type:GET_ALL_RECIPES,
        payload:data
    }

    ))
}*/


//* Ruta de Todas las dietas

export function getAllDiets(){
    return async function(dispatch){
        const resul = await axios("http://localhost:3001/diets")
        //console.log(resul)
        dispatch({
            type:GET_ALL_TYPES,
        payload:resul.data
        })
    }
} 

//* Ruta de Todas las dietas Fetch
/*



export const getAllDiets = ()=>(dispatch) =>{
    return fetch("http://localhost:3001/diets")
    .then((r=>r.json()))
    .then((data)=>dispatch({
        type:GET_ALL_TYPES,
        payload:data
    }))
}
*/




//*Guardar Page

export function savePage(payload){
    return({
        type:SAVE_PAGE,
        payload
    })
}


//*Limpiar estado

export function cleanFilter(){
    return {
        type:CLEAN_FILTER,
        payload:[]
    }
}


//*Ruta de Busqueda po nombre


export function getName(name){
    return async function(dispatch){
        try {
            const resul = await axios.get(`http://localhost:3001/recipes?name=${name}`)
           console.log(resul)
           return dispatch ({
            type: GET_NAME,
            payload: resul.data
           });
        } catch  {
            return alert("No se pudo encontrar la Dieta");

        }
    };
}


// Detalles por Id

/*
export function getRecipesById(id){
    return async function(dispatch){
        const resul = await axios (`http://localhost:3001/recipes/${id}`)
       // console.log(resul)
        dispatch({
            type:GET_RECIPES_BY_ID,
            payload: resul.data
        })
   
   
    }
}
*/

export const getRecipesById= (id) =>(dispatch) =>{
    return fetch(`http://localhost:3001/recipes/${id}`)
    .then((r)=>r.json())
    .then((data)=>dispatch({type:GET_RECIPES_BY_ID,payload:data}))
}


//*Filtrados

//*Filtrado por Dietas

export function filterByTypesDiets(payload){
    console.log(payload)
   return{
           type: FILTER_BY_TYPES_DIETS,
           payload
   }
            
}

//*Filtrado por nombre

export function orderName(payload){
    return{
        type: ORDER_NAME,
        payload
    }
}



//* Fitrado por Score

export function orderScore(payload){
    return{
        type:ORDER_SCORE,
        payload
    }
}


//* Filtrado por Origen 

export function filterOrigen(payload){
    return({
        type:FILTER_ORIGEN,
        payload
    })
}

//* Post de creacion

export function postRecipe(payload){
    return async function(dispatch){
        const resp = await axios.post("http://localhost:3001/recipes",payload)
        console.log(resp)
        return resp
    }
}





//* Favoritos Prueba


export function add_Favorites (data) {
    return { type: ADD_FAVORITES, payload: data };
  };
  


export function remove_Favorites(id){
    return { type: REMOVE_FAVORITES, payload: id };
  };
  
 
  