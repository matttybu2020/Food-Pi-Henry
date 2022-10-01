import React from "react";
//import imagen from "../../img/imagen.gif";
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
        <h1> Food </h1>
        <p>""</p>
        <h1>Gonzalez Matias Enrique 🧑‍💻</h1>
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