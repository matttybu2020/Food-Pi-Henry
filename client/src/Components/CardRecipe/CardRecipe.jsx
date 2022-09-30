import React from "react";

export default function CardRecipe({ name, image, diets }) {
  return (
    <div className="cards-recetas">
      <h1 className="name-recipe">{name}</h1>
      <img src={image} alt="image not found" className="image" />
      <h2 className="diets-recipe">{diets.join(",  ")}</h2>
    </div>
  );
}
