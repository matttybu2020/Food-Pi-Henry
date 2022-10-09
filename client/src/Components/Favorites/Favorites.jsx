import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { remove_Favorites} from "../../Redux/Actions/index";
//import {handleDelete} from "../../Components/CreateRecipe/CreateRecipe"
import "./Favorites.css";

function Favorites() {
  const state = useSelector((state) => state.favorites);
  let history = useHistory();

  const dispatch = useDispatch();

  const removefavorite = (e) => {
    dispatch(remove_Favorites(e.target.id));
  };



  /*function handleDelete(el){
    setInput({
        ...input,
        diets: input.diets.filter(d=> d !== el) 
    })
}*/


  function volver() {
    history.push("/home");
  }
  return (
    <div className="contendedorfavorites">
    <div className="favorites">
      {state.length > 0 ? (
        <div className="recipeCreate">
          {state.map((e) => (

            <div key={e.id} className="recipeCard">
                           <div className="contenido">
                           <div className="titulo">
                <h3>{e.name}</h3>
              </div>
                <div className="img_diets">
                  <img
                    src={e.image}
                    alt="error cargando"
                                      />{" "}
                </div>
                


                <div className="text_diets">
                  <h3>{"Diets:"}</h3>
                  {e.diets.map((e, i) => (
                    <div key={i}>{e}</div>
                    
                  ))}
                </div>
                
                <div className="opciones">
                  <Link to={`/recipes/${e.id}`} className="links">
                    <button className="button-recipe3"> Ver detalles</button>
                  </Link>
                 
                </div>
                <button className="button-recipe3" type="button2" id={e.id} onClick={removefavorite}>
                    {"Eliminar Favorito"}
                  </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No tenemos Dietas agregadas a Favorito </h1>
      )}
      <button className="button-recipe" type="button" onClick={volver} >
        Volver
      </button>
    </div>
    </div>
  );
}

export default Favorites;