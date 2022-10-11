import React from "react";
import "./CardRecipe.css";

export default function CardRecipe({ name, image, diets,healthScore }) {
  return (
    <div className="cards-recetas">
      <h1 className="name-recipe">{name}</h1>
      <div className="image_container">
      <img src={image} alt="image not found" className="image" 
      width="100%"
      height="100%"/>
      </div>
      
        <h1>⭐{healthScore}</h1>
        <h2 className="diets-recipe">🥦{diets.join(",  ")}</h2>
    </div>
  );
}

      