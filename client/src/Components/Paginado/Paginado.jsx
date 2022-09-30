import React from "react";


export default function Paginado({recipesPerPage,recipes,paginado}){
 const pageNumbers =[]

 for (let i= 1; i <= Math.ceil(recipes/recipesPerPage); i++) {
   pageNumbers.push(i)
    
 }
 console.log(pageNumbers.length)

 return(
    <nav>
        
        <ul className="paginado">
       
       
                           {     
                                  pageNumbers && 
                                  pageNumbers.map(number =>(
                                    
                                <button className="button-recipe selecionado" onClick ={() => paginado(number)}>{number}</button>
                                 
                                  ))
                                }
           

                                  </ul>
                                  
                
    </nav>
        

 ) 
}