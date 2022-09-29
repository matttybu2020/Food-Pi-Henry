import React from 'react'
//import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'
import Fecha from '../Fecha/Fecha'

function NavBar() {
    return (
        <>
        <div className="navbar-div">
                <NavLink to="/"><button>Principal</button></NavLink>
                <NavLink to="/home"><button>Home</button></NavLink>
                <NavLink to="/crearRecipe"><button>CrearRecipe</button></NavLink>
                <NavLink to="/about"><button>About</button></NavLink>
        </div>
        <Fecha />
        </>

    )
}

export default NavBar