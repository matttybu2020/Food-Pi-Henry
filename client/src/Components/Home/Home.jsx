import React from "react";
import { useEffect,useState } from "react";
import { useSelector, } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getAllRecipes,getAllDiets,savePage,cleanFilter} from "../../Redux/Actions/index"
import Paginado from "../Paginado/Paginado.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import CardRecipe from "../CardRecipe/CardRecipe.jsx"
import NavBar from "../NavBar/NavBar.jsx";




export default function Home(){


//* const de estados
const recipes = useSelector((state)=> state.recipes)
//const diets = useSelector((state)=> state.diets)
const pages1 = useSelector(((state)=>state.pages))
//const [order,setOrder] = useState("")

const dispatch = useDispatch()


//*Paginado

const [currentPage,setCurrentPage] = useState(pages1) 
const [recipesPerPage,setRecipesPerPage] = useState(9)
const indexOfLastRecipe = currentPage * recipesPerPage
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
const currentRecipe = recipes.slice(indexOfFirstRecipe,indexOfLastRecipe)


const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  } 
 

  function handlePage(e){
    dispatch(savePage(currentPage))
  }
  
  useEffect(()=>{
    dispatch(getAllRecipes())
    dispatch(getAllDiets())
 },[dispatch])

 function handleRefresh(e){
    e.preventDefault()
    dispatch(cleanFilter())
    dispatch(getAllRecipes())
  }

 // para next y siguiente
 const nextPage = () => {
  setCurrentPage(currentPage + 1);
};
const beforePage = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
};







    return (
    
        <div className="contenedor-principal">
            <button className="button-recipe"onClick={(e)=>{handleRefresh(e)}}>Recargar</button>

          
<NavBar />
<div className="searchbar-container">
         <SearchBar/>
         </div>
       
      <Paginado
                recipesPerPage={recipesPerPage}
                recipes={recipes.length}
                paginado ={paginado} 
                currentPage={currentPage}
                beforePage={beforePage}
                nextPage={nextPage}
                

                />

         
<div className="contenedor-cards">
 {  
    currentRecipe?.map(el=>{
        return(
         < Link onClick={(e)=>handlePage(e)} to = {'/recipes/' + el.id }>
            <CardRecipe key ={el.id}
             name ={el.name}
             image ={el.image}
             diets ={el.diets}
             />
            </Link>
        )     
    })
  } 
  
  {recipes.length === 0 && <p>RECETAS NO ENCONTRADAS</p>}
</div>
    </div>
 )

}