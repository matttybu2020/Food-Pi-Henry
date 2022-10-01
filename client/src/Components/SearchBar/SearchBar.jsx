import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName} from "../../Redux/Actions/index";



export default function SearchBar(){
    
    const [name,setName] = useState("")
    const dispatch = useDispatch()

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    
    console.log(name)
   }
 function handleSubmit(e){
    e.preventDefault()
    if(name.length===0){
        alert("Porfavor escriba un receta para iniciar la búsqueda")
    }else{
    dispatch(getName(name))
    setName("")
 }
}



return (
    <div className="searchbar">

        <input className="buscador"
        type = "text"
        placeholder="Busca tu receta.."
        onChange={handleInputChange}
        value={name}
        />
        <button type = 'submit'onClick={handleSubmit} className="button-recipe">Buscar</button>
        
        
        
        
    </div>
)
}