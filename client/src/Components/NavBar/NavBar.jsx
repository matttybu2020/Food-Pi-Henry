import React from 'react'
//import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <>
        <div className="navbar-div">
                <NavLink to="/"><button className='button-recipe'>Inicio</button></NavLink>
                <NavLink to="/home"><button className='button-recipe'>Principal</button></NavLink>
                <NavLink to="/favorites"><button className='button-recipe'>Favoritos</button></NavLink>
                <NavLink to="/createRecipe"><button className='button-recipe'>Crear Receta</button></NavLink>
                <NavLink to="/about"><button className='button-recipe'>Informacion</button></NavLink>
                

        </div>
       
        </>

    )
}

export default NavBar