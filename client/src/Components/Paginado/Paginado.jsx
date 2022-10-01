import React from "react";
import style from "./Paginado.module.css";




export default function Paginado({recipesPerPage,recipes,paginado,currentPage,beforePage,nextPage,}) 

{
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers.length);

  return (
    <nav>
      <ul className="paginado">
        <button
          className={
            currentPage === "Anterior" ? style.botonSeleccionado : style.boton
          }onClick={beforePage}
        >Anterior</button>

        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className="button-recipe selecionado"
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          ))}
        <button
          className={ currentPage === "Proximo" ? style.botonSeleccionado : style.boton
          }onClick={nextPage}disabled={currentPage >= pageNumbers.length}
        > Proximo</button>
      </ul>
    </nav>
  );
}
