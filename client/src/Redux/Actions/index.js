import axios from "axios";

import {GET_ALL_RECIPES ,GET_ALL_TYPES,SAVE_PAGE,CLEAN_FILTER,GET_NAME,GET_RECIPES_BY_ID} from "../Actions/Contantes"




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