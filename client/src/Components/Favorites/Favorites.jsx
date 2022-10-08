import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { remove_Favorites} from "../../Redux/Actions/index";
import "./Favorites.css";

function Favorites() {
  const state = useSelector((state) => state.favorites);
  let history = useHistory();

  const dispatch = useDispatch();

  const removefavorite = (e) => {
    dispatch(remove_Favorites(e.target.id));
  };

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
              <div className="titulo">
                <h3>{e.title}</h3>
              </div>

              <div className="contenido">
                <div className="img_diets">
                  <img
                    src={e.image}
                    alt="error cargando"
                    width="100%"
                    height="100%"
                  />{" "}
                </div>

                <div className="opciones">
                  <Link to={`/recipes/${e.id}`} className="links">
                    <button> VER DETALLES</button>
                  </Link>
                  <button type="button2" id={e.id} onClick={removefavorite}>
                    {"Eliminar Favorito"}
                  </button>
                </div>

                <div className="text_diets">
                  {"Diets:"}
                  {e.diets.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No tenemos agregados </h1>
      )}
      <button type="button" onClick={volver} className="volver">
        Volver
      </button>
    </div>
    </div>
  );
}

export default Favorites;