import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
export default function Landing(){


    return (
        <div className="landing_container">
        <div className="background">
        <Link to ='/home'>              
        <button className="button">Welcome </button>
            </Link>
            </div>
    </div>
       
    );
       
    
}