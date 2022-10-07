import React from 'react'
//import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <>
        <div className="navbar-div">
                <NavLink to="/"><button className='button-recipe'>Principal</button></NavLink>
                <NavLink to="/home"><button className='button-recipe'>Home</button></NavLink>
                <NavLink to="/createRecipe"><button className='button-recipe'>CrearRecipe</button></NavLink>
                <NavLink to="/about"><button className='button-recipe'>About</button></NavLink>
        </div>
       
        </>

    )
}

export default NavBar