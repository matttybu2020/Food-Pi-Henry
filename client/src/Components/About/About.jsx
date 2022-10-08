import React from "react";
import imagen from "../../Img/imagen.jpg";
import "./About.css";
import NavBar from "../NavBar/NavBar.jsx";
import Github from "../../Img/Github.gif";
import Linkedin from "../../Img/Linkedin.gif";

export default function About() {
  return (
    <>
    <div className="caja">

      <NavBar />

      <div className="con-about">
        <h1>👨‍💻 Proyecto Individual 👨‍💻</h1>
        <h1>Gonzalez Matias Enrique 🧑‍💻</h1>
        <h1>Recetas  </h1>
        <div className="div-foto">
          <img src={imagen} alt="foto"></img>
        </div>
       
        <h2>Tegnologias Usadas</h2>
        <h3><p>👨‍💻 JavaScript</p>
        <p>⚙️ React,Redux</p>
        <p>👁️ CSS,HTML</p>
        <p>💽 SQL, Node JS, Express, Sequelize, PostgreSQL</p></h3>
        <div className="div-foto">
          
        </div>
        <div className="homeLinks">
          <a href="https://github.com/matttybu2020" target="_blank">
            <img className="imgGit" src={Github} alt="lol" />
          </a>
          <a
            href="https://www.linkedin.com/in/matias-enrique-g/"
            target="_blank"
          >
            <img className="imgLink" src={Linkedin} alt="lol" />
          </a>
          
        </div>
      </div>
      </div>
    </>
  );
}