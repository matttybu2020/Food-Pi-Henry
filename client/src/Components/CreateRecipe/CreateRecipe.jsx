import React from "react";
import { useState ,useEffect} from "react";
import{ useSelector,useDispatch} from "react-redux";
import{ getAllDiets ,postRecipe } from "../../Redux/Actions/index";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import './CreateRecipe.css'





    export default function CreateRecipe(){
    const dispatch = useDispatch()// map distpatch to props
    const history = useHistory()
    const dietsTypes = useSelector((state)=> state.diets) //map to props
    const recipes = useSelector((state)=> state.allRecipes)
    const [errors,setErrors] = useState({})
   console.log(recipes)
  
   

const [input,setInput] = useState({
    name:"",
    summary:"",
    image:"",
    healthScore:"",
    steps:"",
    dishTypes:"",
    diets:[],
    
})

useEffect(()=>{
    dispatch(getAllDiets())
},[])






function handleInputChange(e){
    setInput({
     ...input,
     [e.target.name]:e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
}))
}
function handleSelect(e){

    if(!input.diets.includes(e.target.value)){
    setInput({
        ...input,
        diets:[...input.diets,e.target.value]
       
    })
    console.log(input)
}else{
    alert("La dieta ya existe")
}
}


function handleDelete(el){
    setInput({
        ...input,
        diets: input.diets.filter(d=> d !== el) 
    })
}

function handleSubmit(e){
    e.preventDefault()
if(input.name && input.summary&&input.image&&input.healthScore&&input.steps&&input.dishTypes 
&&!errors.name&& !errors.summary&&!errors.image&&!errors.healthScore&&!errors.steps&&!errors.dishTypes&&input.diets.length !==0 &&input.diets.length<=3){
    dispatch(postRecipe(input))
    alert("Receta creada exitosamente")
    setInput({
        name:"",
        summary:"",
        image:"",
        healthScore:"",
        steps:"",
        dishTypes:"",
        diets:[],
       
    })
    history.push('/home')
}else{
    alert("Completa el formulario correctamente")
}
}


function validate(input){
    
    let errors = {}

    //! Validacion Nombres de recetas

    if(!input.name){
        errors.name = "El campo nombre es requerido"
    }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.name))){
        errors.name = "El campo nombre solo acepta letras"
    }
    else if (recipes.find(e => e.name === input.name)){
        errors.name="nombre ya existente"
      }
      else if (!/^.{0,25}$/.test(input.name)){
        errors.name="Este campo no puede contener más de 30 caracteres"
      }

 //! Validacion Summary

    if(!input.summary){
     errors.summary = "Porfavor agrege algún comentario sobre su receta"
    }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.summary))){
        errors.summary = "El campo summary solo acepta letras"
    }

 //! Validacion image

   /* if(!input.image){
        errors.image = "El campo imagen es requerido"
    }else if((!/.+\.(jpg|png)$/.test(input.image))){
        errors.image = "La imagen debe ser de tipo jpg o png"
    }*/
    if (!input.image)errors.image= "Viene por default o ingrese img";
  else if (!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/.test(
    input.image))
     {
      errors.image = 'Formato no Valido';
  }


 //! Validacion healthScore

    if(!input.healthScore){
        errors.healthScore = "Es necesario un valor"
    }else{
        if(input.healthScore < 1 || input.healthScore > 100)
        errors.healthScore = "El puntaje debe ser entre 1 y 100"  
    }

 //! Validacion steps

    if (!input.steps){
        errors.steps = "Porfavor detalle los pasos de su receta"
    }else if((!/^[A-Za-z0-9\s]+$/g.test(input.steps.trim()))){
       errors.steps = "El campo paso a paso solo acepta letras y numeros "
    }
    //! Validacion dishTypes

    if(!input.dishTypes){
        errors.dishTypes = "Es necesario algún tipo de plato"
    }else if(!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(input.dishTypes.trim())){
        errors.dishTypes = "Solo se aceptan letras"
    }
        return errors
}
   












return (
    <div className="container3">
        <div className="container-form">
        <div className="title-container">
        <h1 className="title">Receta Nueva</h1>
        </div>
     <form onSubmit={handleSubmit} className="form">
    <div className="elements-form">
        <label className="label">Nombre:</label>
        <input className="input"
        type = "text"
        name = "name"
        value = {input.name}
        onChange ={handleInputChange}
        />
        {errors.name && <p className="danger">{errors.name}</p>}
    </div>
    <div className="elements-form">
        <label className="label">Resumen:</label>
        <input className="input"
        type = "text"
        name = "summary"
        value = {input.summary}      
        onChange ={handleInputChange} 
        />
         {errors.summary && <p className="danger">{errors.summary}</p>}
        </div>
         <div className="elements-form">
        <label className="label">Imagen:</label>
        <input className="input"
        type = "text"
        name = "image"
        value = {input.image}      
        onChange ={handleInputChange} 
        />
        {errors.image && <p className="danger">{errors.image}</p>}
         </div>
         <div className="elements-form">
        <label className="label">Nivel:</label>
        <input className="input"
        type = "number"
        name = "healthScore"
        value = {input.healthScore}
        onChange ={handleInputChange}
        />
         {errors.healthScore && <p className="danger">{errors.healthScore}</p>}
        </div>
        <div className="elements-form">
        <label className="label">Paso a Paso:</label>
        <input className="input"
        type = "text"
        name = "steps"
        value = {input.steps}
        onChange ={handleInputChange}
        />
         {errors.steps&& <p className="danger">{errors.steps}</p>}
        </div>
        <div className="elements-form">
        <label className="label">Tipos de plato: </label>
        <input className="input"
        type ="text"
        name = "dishTypes"
        value = {input.dishTypes}
        onChange ={handleInputChange}
        /> 
        {errors.dishTypes && <p className="danger">{errors.dishTypes}</p>}      
        </div>
        <div className="select-form">
       <select  onChange ={(e)=>handleSelect(e)} className="select">
        <option selected >Selecciona tus tipos de dieta</option>
        {dietsTypes.map(el=>(
            <option value ={el}>{el}</option>
        ))}
       </select>
       </div>
       
   
       <div className="button-container">
       <button  type = 'submit' className="button-recipe">Enviar Receta</button>
       </div>

        <div className="lista-container">
        <ul>{input.diets.map(el =><li className="lista"><button className="button-recipe"
         onClick={()=>handleDelete(el)}>{el}</button></li>)}</ul>
        </div>
        <div className="button-container">
        <Link to = 'home'><button className="button-recipe">Volver </button></Link>
        </div>

        </form>
    </div>
    </div>
)}

