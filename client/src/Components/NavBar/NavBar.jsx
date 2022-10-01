import React from 'react'
//import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <>
        <div className="navbar-div">
                <NavLink to="/"><button>Principal</button></NavLink>
                <NavLink to="/home"><button>Home</button></NavLink>
                <NavLink to="/createRecipe"><button>CrearRecipe</button></NavLink>
                <NavLink to="/about"><button>About</button></NavLink>
        </div>
       
        </>

    )
}

export default NavBar