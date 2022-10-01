
import React from "react";
import { Link,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesById,cleanFilter, } from "../../Redux/Actions/index";
import { useEffect } from "react";




export default function DetailsRecipe(props) {
 
const dispatch = useDispatch();


useEffect(() => {
  dispatch(getRecipesById(props.match.params.id));
 return(()=>{
  dispatch(cleanFilter())
 })
},[dispatch,props.match.params.id]);



const myRecipe = useSelector((state)=> state.detail);
console.log(myRecipe)

return( // renderizamos el detalle
  <div>
    <div className="container">
      {
         myRecipe.length>0?
    <div>
    <div>
    <h2 className="title">{myRecipe[0].name}</h2>
    </div>
    <div className="container-imagen">
    <img src ={myRecipe[0].image } alt = "img" className="imagen-detalle"/> 
    </div>
    <div className="container-dishtypes">
    <p><p className="negrita">Dishtypes:</p>{myRecipe[0].dishTypes}</p>
    </div>
    <div className="container-diets">
    <span className="tipo-dieta negrita">Diets:</span>
    </div>
    <div className="container-diets">
    <span>{myRecipe[0].diets.map(el=> <p className="button-recipe">{el}</p>)}</span>
    </div>
    <div className="health-score">
    <p><p className="negrita">HealthScore:</p> {myRecipe[0].healthScore}</p>
    </div>
    <div className="summary-container">
    <p><p className="negrita">Summary:</p>{myRecipe[0].summary.replace(/<[^>]*>/g, '')}</p>  
    </div>
    <div className="summary-container">
    <p className="negrita">Steps:</p>
    </div>
  <div className="steps-container">
<ol>{Array.isArray(myRecipe[0].steps)? myRecipe[0].steps.map(el=>{
      return (
        <li className="items-lista">{el}</li>
      )
    }
    ):
    <li>{myRecipe[0].steps}</li>
  }
    </ol>
  
  
   </div>
   

         </div>:<img className="cargador"
         src="https://th.bing.com/th/id/R.4d3652eb2e65b9560020e72a3e51dcb5?rik=TN4q6NeXsR3llQ&riu=http%3a%2f%2fwww.gifde.com%2fgif%2fotros%2fdecoracion%2fcargando-loading%2fcargando-loading-041.gif&ehk=5k7Cxm0aV2Rb1zXFwfB%2boV3G%2bm7hc9e6UnHwx84JUBU%3d&risl=&pid=ImgRaw&r=0" alt="not found" />
              
   }
<div className="button-containerone">
  <Link to = '/home'><button className="button-recipe">Volver Al Home</button></Link>
  </div>
  </div>
  </div>
)

}
