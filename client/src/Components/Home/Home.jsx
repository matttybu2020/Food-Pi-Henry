import React from "react";
import { useEffect,useState } from "react";
import { useSelector, } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getAllRecipes,getAllDiets,savePage,cleanFilter,filterByTypesDiets,orderName,orderScore,filterOrigen} from "../../Redux/Actions/index"
import Paginado from "../Paginado/Paginado.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import CardRecipe from "../CardRecipe/CardRecipe.jsx"
import NavBar from "../NavBar/NavBar.jsx";
import "./Home.css"



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
const [order,setOrder] = useState("")


const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  } 
 

  function handlePage(e){
    dispatch(savePage(currentPage))
  }
  
 // para next y siguiente
 const nextPage = () => {
  setCurrentPage(currentPage + 1);
};
const beforePage = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
};


//* Despacho las acciones

  useEffect(()=>{
    dispatch(getAllRecipes())
    dispatch(getAllDiets())
 },[dispatch])



 //* Recargo la pagina
 function handleRefresh(e){
    e.preventDefault()
    dispatch(cleanFilter())
    dispatch(getAllRecipes())
  }


//*Filtrado 


function handleFilterByDiets(e){
  dispatch(filterByTypesDiets(e.target.value))
  setCurrentPage(1)
  setOrder("Ordenado por" + e.target.value)
  
}

function handleSortByName(e){
  e.preventDefault()
  dispatch(orderName(e.target.value))
  setCurrentPage(1)
setOrder("Ordenado por" + e.target.value)
  
}
function handleSortByScore(e){
  dispatch(orderScore(e.target.value))
  setCurrentPage(1)
  setOrder("Ordenado por" + e.target.value)

}

function handleFilterByOrigen(e){
  dispatch(filterOrigen(e.target.value))
  setCurrentPage(1)
  setOrder("Ordenado"+e.target.value)
}



    return (
    
        <div className="contenedor">
           

            <div className="navbar-container">
<NavBar />
</div>

<div className="searchbar-container">
         <SearchBar/>
         <div className="contendor-buttonn">
         <button className="button-recipe"onClick={(e)=>{handleRefresh(e)}}>Recargar</button>
         </div>
        
         </div>



         <div className="contenedor-filtros">
         <select onChange={handleFilterByDiets} className="filtros">
           <option value = 'tipos'>Filter by type</option>
          
          <option value="gluten free">gluten free</option>
           <option value ="dairy free">dairy free</option>
           <option value ="lacto vegetarian">lacto  vegetarian</option>
           <option value ="ovo vegetarian">ovo vegetarian</option>
           <option value ="lacto ovo vegetarian">lacto ovo vegetarian</option>
           <option value ="vegan">vegan</option>
           <option value ="paleolithic">paleolithic</option>
           <option value ="primal">primal</option>
           <option value ="whole 30">whole 30</option>
           <option value="pescatarian">pescatarian</option>
           <option value ="fodmap friendly">fodmap friendly</option>
           <option value ="ketogenic">ketogenic</option>
          <option value ="vegetarian">vegetarian</option> 
           
    
         </select>
         <select onChange={(e)=>handleSortByName(e)}  className="filtros">
            <option value ='All'>Order alphabetically</option>
            <option value = 'asc'>A:Z</option>
            <option value = 'des'>Z:A</option>
         </select>

         <select onChange={handleSortByScore} className="filtros">
            <option value = 'default'>Order by Health Score</option>
            <option value= 'min'>Min to Max</option>
            <option value= 'max'>Max to Min</option>
         </select>

         <select onChange={handleFilterByOrigen} className="filtros">
           <option value="All">Todos</option>
            <option value = "created">Created</option>
            <option value = "api">Api</option>
         </select>
         


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