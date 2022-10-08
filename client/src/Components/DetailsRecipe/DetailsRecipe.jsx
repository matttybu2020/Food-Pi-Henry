
import React from "react";

import { Link,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesById,cleanFilter,add_Favorites } from "../../Redux/Actions/index";
import { useEffect } from "react";
//import Swal from "sweetalert2";
import "./DetailsRecipe.css"




export default function DetailsRecipe(props) {
 
const dispatch = useDispatch();


useEffect(() => {
  dispatch(getRecipesById(props.match.params.id));
 return(()=>{
  dispatch(cleanFilter())
 })
},[dispatch,props.match.params.id]);

const myRecipe = useSelector((state)=> state.detail);
console.log(myRecipe)



//*Agregar a Favorites

const state = useSelector((state) => state);
const { favorites } = state;



const Add_Favorite = () => {
  let id_favorite = myRecipe.id;

  let info_repeat = favorites.find((e) => e.id === id_favorite);

  if (!info_repeat) {
    dispatch(add_Favorites(myRecipe));
    return alert("Agregado A Favoritos");
  }
   return alert("Ya se encuentra en Favoritos");
};


return( // renderizamos el detalle
  <div>
    <div className="container">
      {
         myRecipe.length>0?
    <div>
    <div>
    <h2 className="title">{myRecipe[0].name}</h2>
    </div>
    <div className="container-imagen">
    <img src ={myRecipe[0].image } alt = "img" className="imagen-detalle"/> 
    </div>
    <div className="container-dishtypes">
    <p><p className="negrita">Dishtypes:</p>{myRecipe[0].dishTypes}</p>
    </div>
    <div className="container-diets">
    <span className="tipo-dieta negrita">Diets:</span>
    </div>
    <div className="container-diets">
    <span>{myRecipe[0].diets.map(el=> <p className="button-recipe1">{el}</p>)}</span>
    </div>
    <div className="health-score">
    <p><p className="negrita">HealthScore:</p> {myRecipe[0].healthScore}</p>
    </div>
    <div className="summary-container">
    <p><p className="negrita">Summary:</p>{myRecipe[0].summary.replace(/<[^>]*>/g, '')}</p>  
    </div>
    <div className="summary-container">
    <p className="negrita">Steps:</p>
    </div>
  <div className="steps-container">
<ol>{Array.isArray(myRecipe[0].steps)? myRecipe[0].steps.map(el=>{
      return (
        <li className="items-lista">{el}</li>
      )
    }
    ):
    <li>{myRecipe[0].steps}</li>
  }
    </ol>
  
  
   </div>
   

         </div>:<img className="cargador"
         src="https://retchhh.files.wordpress.com/2015/03/loading1.gif" alt="not found" />
              
   }
<div className="button-containerone">
  <Link to = '/home'><button className="button-recipe">Volver</button></Link>
  <button type="button" onClick={Add_Favorite} className="add_button">
          {"AGREGAR A FAVORITOS"}
        </button>
  </div>
  </div>
  </div>
)

}
